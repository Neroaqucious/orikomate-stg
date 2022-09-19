$(function(){
    $('#select_product_id').change(recalcDeadline);
    $('#select_settype_id').click(recalcDeadline);
    $('#insertion_date').datepicker('option', 'onSelect', recalcDeadline);
});
function recalcDeadline() {
    var working_days = $('#select_settype_id option:selected').attr('data-workingdays');
    $('#selected_workingdays').text(working_days);
    var insertion_date = $('#insertion_date').datepicker('getDate');
    $('#selected_insertion_date').text($.datepicker.formatDate('yy年mm月dd日 朝刊', insertion_date));
    getDeadline($.datepicker.formatDate('yy/mm/dd', insertion_date), working_days, $('#select_settype_id option:selected').attr('data-delivery_workingdays'));
}

function getDeadline(insertion_date, working_days, delivery_working_days) {
    var data = {"Operation":"GetDeadline","Service":1, "InsertionDate":insertion_date, "WorkingDays": working_days, 'DeliveryWorkingDays': delivery_working_days};
    $.ajax({
        type: "GET",
        url:  "/api/json.php",
        data: data,
        success: function(res){
            //通信成功時の処理
            setDeadline(res);
        },
        error: function(){
            //通信失敗時の処理
        }
    });
}
function setDeadline(data) {
    $('#deadline_payment').text(data.GetDeadline.Deadlines.deadline_payment + 'まで');
    $('#deadline_data').text(data.GetDeadline.Deadlines.deadline_payment + 'まで');
    var deadline_delivery = data.GetDeadline.Deadlines.deadline_delivery;
    if(deadline_delivery !== '') {
        $('#deadline_delivery').text(data.GetDeadline.Deadlines.deadline_delivery + 'まで');
        $('#deadline_delivery').parent().show();
    } else {
        $('#deadline_delivery').parent().hide();
    }
    
    console.log(data);
}