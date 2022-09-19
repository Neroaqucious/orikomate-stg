    $(function($) {
	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();



	// 東京都選択後
	$(".mapmenu label.tokyolabel").click(function(){
	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();
	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.tokyo').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '94px 322px');
	$('.mainmapin').css('background-repeat', 'no-repeat');

	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');

	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_tokyo').show();

	$('.labelreset').show();
	});

	// 神奈川県選択後
	$(".mapmenu label.kanagawalabel").click(function(){
	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();
	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.kanagawa').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '-829px 396px');
	$('.mainmapin').css('background-repeat', 'no-repeat');

	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');

	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_kanagawa').show();
	$('.labelreset').show();
	});
	// 埼玉県選択後
	$(".mapmenu label.saitamalabel").click(function(){
	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();

	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.saitama').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '121px -525px');
	$('.mainmapin').css('background-repeat', 'no-repeat');
	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');

	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_saitama').show();
	$('.labelreset').show();
	});
	// 千葉県選択後
	$(".mapmenu label.chibalabel").click(function(){
	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();

	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.chiba').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '-678px -458px');
	$('.mainmapin').css('background-repeat', 'no-repeat');
	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');

	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_chiba').show();
	$('.labelreset').show();
	});
	// 茨城県選択後
	$(".mapmenu label.ibaragilabel").click(function(){
	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();

	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.ibaragi').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '271px -1599px');
	$('.mainmapin').css('background-repeat', 'no-repeat');

	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');
	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_ibaragi').show();
	$('.labelreset').show();
	});
	// 栃木県選択後
	$(".mapmenu label.totigilabel").click(function(){

	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();
	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.totigi').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '-760px -1665px');
	$('.mainmapin').css('background-repeat', 'no-repeat');
	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');
	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_totigi').show();
	$('.labelreset').show();
	});
	// 群馬県選択後
	$(".mapmenu label.gunmalabel").click(function(){

	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();

	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();

	$('.mapmenu ul.gunma').show();

	$('.mainmapin').css('background-image', 'url(//www.orikomate.jp/contents/img/map_kt2.png)');
	$('.mainmapin').css('backgroundPosition', '18px -2723px');
	$('.mainmapin').css('background-repeat', 'no-repeat');
	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px -1152px');
	$('.mainmap').css('background-repeat', 'no-repeat');
	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -1152px');
	$('.mainmap2').css('background-repeat', 'no-repeat');
	$('.map_navigation span.mapnavikantou').show();
	$('.map_navigation span.mapnaviarrow').show();
	$('.map_navigation ul li.mapnavi_gunma').show();
	$('.labelreset').show();
	});


	// 全国地図に戻る
	$(".labelreset").click(function(){
	$('[type="checkbox"]').prop('checked',false);
	$('.labelreset').hide();
	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();
	$('.map_navigation span.mapnavikantou').hide();
	$('.map_navigation span.mapnaviarrow').hide();

	$('.mainmapin').css('background-image', 'url(none)');

	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();


	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px 0px');
	$('.mainmap').css('background-repeat', 'no-repeat');

	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -576px');
	$('.mainmap2').css('background-repeat', 'no-repeat');
	});


	// 全国地図に戻る
	$(".mapnavikantou").click(function(){
	$('[type="checkbox"]').prop('checked',false);
	$('.labelreset').hide();
	$('.mapmenu ul.tokyo').hide();
	$('.mapmenu ul.kanagawa').hide();
	$('.mapmenu ul.saitama').hide();
	$('.mapmenu ul.chiba').hide();
	$('.mapmenu ul.ibaragi').hide();
	$('.mapmenu ul.totigi').hide();
	$('.mapmenu ul.gunma').hide();
	$('.map_navigation span.mapnavikantou').hide();
	$('.map_navigation span.mapnaviarrow').hide();

	$('.mainmapin').css('background-image', 'url(none)');

	$('.map_navigation ul li.mapnavi_tokyo').hide();
	$('.map_navigation ul li.mapnavi_kanagawa').hide();
	$('.map_navigation ul li.mapnavi_saitama').hide();
	$('.map_navigation ul li.mapnavi_chiba').hide();
	$('.map_navigation ul li.mapnavi_ibaragi').hide();
	$('.map_navigation ul li.mapnavi_totigi').hide();
	$('.map_navigation ul li.mapnavi_gunma').hide();

	$('.mainmap').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap').css('backgroundPosition', '0px 0px');
	$('.mainmap').css('background-repeat', 'no-repeat');

	$('.mainmap2').css('background-image', 'url(//www.orikomate.jp/contents/img/map.jpg)');
	$('.mainmap2').css('backgroundPosition', '0px -576px');
	$('.mainmap2').css('background-repeat', 'no-repeat');
	});




});