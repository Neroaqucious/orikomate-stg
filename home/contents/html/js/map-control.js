jQuery(function($) {
    $('#map_back, #confirm_back').click(function(){
        if(phase === minPhase) {
            eccube.setModeAndSubmit('return');
        } else {
            changephase(phase - 1);
        }
    });
    $('#form1').submit(function(){
        setData();
    });
    $('#map_next').click(function(){
        if($(this).hasClass('enabled')) {
            setData();
            changephase(phase + 1);
        }
    });
});
function onPhaseChanged(_phase)
{
    phase = _phase;
    changestepheader(_phase);
    changestepfooter(_phase);
}
function setData()
{
	$("#city").val(city);
	$("#rad").val(rad);
	$("#lat").val(lat);
	$("#long").val(long);
	$("#address").val(address);
	$("#point1lat").val(point1lat);
	$("#point1long").val(point1long);
	$("#point1address").val(point1address);
	$("#point2lat").val(point2lat);
	$("#point2long").val(point2long);
	$("#point2address").val(point2address);
	$("#all").val(all);
	$("#phase").val(phase);

    var rad_km = Math.round(rad / 100) / 10;
    $(".rad_text").text(rad_km + 'km');
}
function changephase(_phase)
{
	var iframe = frames[0];
	if (iframe !== null) {
        phase = _phase;
		iframe.setphase(_phase);
        changestepheader(_phase);
        changestepfooter(_phase);
	}
}
function changestepheader(phase)
{
    $('.step-header').hide(200);
    $('#phase' + phase).show(200);
}
function changestepfooter(phase)
{
    if(phase === 3) {
        $('#map_nav').hide(200);
        $('#confirm_nav').show(200);
    } else {
        if(phase === 0) {
            $('#map_next').removeClass('enabled');
            $('#map_next').addClass('disabled');
        } else {
            $('#map_next').removeClass('disabled');
            $('#map_next').addClass('enabled');
        }
        $('#confirm_nav').hide(200);
        $('#map_nav').show(200);
    }
}