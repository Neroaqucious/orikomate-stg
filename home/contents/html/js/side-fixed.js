$(window).load(function () {

	var mainArea = $(".entry");
	var sideWrap = $(".sidebar");
	var sideArea = $(".fixed_menu");

	var wd = $(window); 
	
	var mainH = mainArea.height();
	var sideH = sideWrap.height();
	
	
	if(sideH < mainH) { 
		sideWrap.css({"height": mainH,"position": "relative"});
		var sideOver = wd.height()-sideArea.height();
		var starPoint = sideArea.offset().top + (-sideOver);
		var breakPoint = sideArea.offset().top + mainH - 150;

		wd.scroll(function() {
			
			if(wd.height() < sideArea.height()){
				if(starPoint < wd.scrollTop() && wd.scrollTop() + wd.height() < breakPoint){
					sideArea.css({"position": "fixed", "bottom": "20px"}); 
	
				}else if(wd.scrollTop() + wd.height() >= breakPoint){
					sideArea.css({"position": "absolute", "bottom": "0"});
	
				} else {
					sideArea.css("position", "static");
	
				}
	
			}else{
			
				var sideBtm = wd.scrollTop() + sideArea.height();
				
				if(mainArea.offset().top < wd.scrollTop() && sideBtm < breakPoint){
					sideArea.css({"position": "fixed", "top": "20px"});
					
				}else if(sideBtm >= breakPoint){
				
					var fixedSide = mainH - sideH;
					
					sideArea.css({"position": "absolute", "top": fixedSide});
					
				} else {
					sideArea.css("position", "static");
				}
			}
				
		
		});
	
	} 

});