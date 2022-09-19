if (jQuery) {
    (function ($) {
        $(document).ready(function () {
            $('.megamenu').accessibleMegaMenu();
        });
    }(jQuery));
}

$(function(){
    $('#mega_tokyoin,.accessible-megamenu h2#mega_tokyo a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_tokyo a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_tokyo a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});

    $('#mega_kanagawain,.accessible-megamenu h2#mega_kanagawa a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_kanagawa a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_kanagawa a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});

    $('#mega_saitamain,.accessible-megamenu h2#mega_saitama a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_saitama a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_saitama a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});
    $('#mega_chibain,.accessible-megamenu h2#mega_chiba a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_chiba a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_chiba a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});
    $('#mega_ibarakiin,.accessible-megamenu h2#mega_ibaraki a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_ibaraki a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_ibaraki a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});
    $('#mega_tochigiin,.accessible-megamenu h2#mega_tochigi a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_tochigi a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_tochigi a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});

    $('#mega_gunmain,.accessible-megamenu h2#mega_gunma a').hover(function(){
        var bglink = $(this).attr("href");
        $(".accessible-megamenu h2#mega_gunma a")
         .css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton_on.png)");
    },function(){
    $(".accessible-megamenu h2#mega_gunma a").css("background-image","url(//www.orikomate.jp/user_data/packages/prototype/img/onoff/prefbutton.png)");
});

});