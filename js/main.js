$(window).on("scroll load resize",function () {
    var pixelTop = $(window).scrollTop();
    if(pixelTop > 0 && $(document).width() > 998) {
        $('.header').addClass('active');
    }else if(pixelTop < 1) {
        $('.header').removeClass('active');
    }
});