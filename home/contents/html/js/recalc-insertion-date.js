$(function(){
    $('#environment_app_id').change(recalcMinDate);
    $('input[name=contentreview_order_flg]').click(recalcMinDate);
    $('#radio_insert_nearest_day').click(function(){getDeadline($('#nearest_insertion_date_text').text(), true);});
    $('#radio_specify_insertion_date').click(function(){$('#insertion_date').datepicker('show');});
    $('#insertion_date').datepicker('option', 'onSelect', function(dateText, datepicker){
        $('#radio_specify_insertion_date').prop('checked', true);
        getDeadline(dateText, true);
    });
    $('#deadline_dialog').dialog({
        autoOpen: false,
        modal: true,
        beforeClose: function(event, ui) {setDeadline();},
        buttons:{
            'OK': function() {
                $(this).dialog('close');
            }
        }
    });
    //次画面から戻ってきた場合の処理
    recalcMinDate();
    if($('#radio_specify_insertion_date').prop('checked') && $('#insertion_date').val() !== '') {
        getDeadline($('#insertion_date').val(), false);
    } else if($('#radio_insert_nearest_day').prop('checked') ) {
        getDeadline($('#nearest_insertion_date_text').text(), false);
    }
});
function recalcMinDate() {
    var additionalDays = getAdditionalDays();
    var newMinDate = new Date(minDate);
    
    var actualDay = 1;
    var workingDay = 1;
    while(workingDay <= additionalDays) {
        newMinDate = new Date(minDate + 86400000 * actualDay); // 86400000sec = 1000msec * 60sec * 60min * 24hours = 1day
        var dayOfWeek = newMinDate.getDay();
        var stringDate = jQuery.datepicker.formatDate('yy/mm/dd', newMinDate);
        if(dayOfWeek !== 0 && dayOfWeek !== 6 && arrHolidays.indexOf(stringDate) === -1) {
            workingDay++;
        }
        actualDay++;
    }
    $('#insertion_date').datepicker('option', 'minDate', newMinDate);
    $('#nearest_insertion_date_text').text(newMinDate.getFullYear() + '/' + (newMinDate.getMonth() + 1) + '/' + newMinDate.getDate() );
    updateAdditionalDays();
}
function getDeadline(dateText, showsDialog) {
    var additionalDays = getAdditionalDays();
    var data = {
        "Operation":"GetDeadline",
        "Service":1,
        "InsertionDate":dateText,
        "WorkingDays": working_days + additionalDays,
        'DeliveryWorkingDays': delivery_working_days + additionalDays
    };
    $.ajax({
        type: "GET",
        url:  "/api/json.php",
        data: data,
        success: function(res){
            //通信成功時の処理
            showDeadline(res, showsDialog);
        },
        error: function(){
            //通信失敗時の処理
        }
    });
}
function showDeadline(data, showsDialog) {
    var deadline_payment = data.GetDeadline.Deadlines.deadline_payment;
    var deadline_delivery = data.GetDeadline.Deadlines.deadline_delivery;
    $('#deadline_dialog #deadline_dialog_payment').text(deadline_payment);
    $('#deadline_dialog #deadline_dialog_data').text(deadline_payment);
    $('#deadline_dialog #deadline_dialog_image').text(deadline_payment);
    $('#deadline_dialog #deadline_dialog_delivery').text(deadline_delivery);
    if(showsDialog) {
        $('#deadline_dialog').dialog('open');
    } else {
        setDeadline();
    }
}
function setDeadline() {
    $('#deadline_payment').text($('#deadline_dialog_payment').text());
    $('#deadline_data').text($('#deadline_dialog_data').text());
    $('#deadline_image').text($('#deadline_dialog_image').text());
    $('#deadline_delivery').text($('#deadline_dialog_delivery').text());
}

function getAdditionalDays() {
    var reviewDays = $('#environment_app_id option:selected').attr('data-additional-day');
    var appDays = $('input[name=contentreview_order_flg]:checked').attr('data-additional-day');

    return ((reviewDays === '' || reviewDays === undefined) ? 0 : parseInt(reviewDays))
            + ((appDays === '' || appDays === undefined) ? 0 : parseInt(appDays));
}
function updateAdditionalDays() {
    var reviewDays = $('input[name=contentreview_order_flg]:checked').attr('data-additional-day');
    var reviewDaysInt = (reviewDays === '' || reviewDays === undefined) ? 0 : parseInt(reviewDays);
    var appDays = $('#environment_app_id option:selected').attr('data-additional-day');
    var appDaysInt = (appDays === '' || appDays === undefined) ? 0 : parseInt(appDays);
    var totalDays = reviewDaysInt + appDaysInt;
    
    if(reviewDaysInt > 0) {
        $('#nearestday_cotentreview_day').text(reviewDaysInt);
        $('#nearestday_cotentreview_day').parent().show();
    } else {
        $('#nearestday_cotentreview_day').parent().hide();
    }
    if(appDaysInt > 0) {
        $('#nearestday_app_day').text(appDaysInt);
        $('#nearestday_app_name').text($('#environment_app_id option:selected').attr('data-appname'));
        $('#nearestday_app_day').parent().show();
    } else {
        $('#nearestday_app_day').parent().hide();
    }
    if(totalDays > 0) {
        $('#nearestday_total_day').text(totalDays);
        $('#nearestday_detail').show();
    } else {
        $('#nearestday_detail').hide();
    }
}