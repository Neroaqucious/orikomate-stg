$(function(){
    $( '#insertion_date' ).datepicker({
        dateFormat: 'yy/mm/dd',
        maxDate : '+1y',
        minDate: new Date(minDate),
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy/mm/dd', date);
            return [ arrOffDays.indexOf(string) === -1, (arrHolidays.indexOf(string) === -1 ? '': 'ui-datepicker-week-end') ];
        }
    });
});
