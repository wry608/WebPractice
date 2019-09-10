$(document).ready(function(){

    function recommendImgSize(width, height){
        let recommendImg = $('.recommend').find('img');
        recommendImg.css('width', width);
        recommendImg.css('height', height);
    }

    let windowH = $(window).height();
    $('.menu').css('height', windowH);

    $('.menu-toggle').click(function(){
        $('.menu').slideDown();
    });

    $('.menu__btn-close').click(function(){
        $('.menu').slideUp();
    });

    if ($(window).width() < 510){
        recommendImgSize('auto', '100%');
    } else {
        recommendImgSize('100%', 'auto');
    };

    $(window).resize(function(){
        if ($(window).width() < 510){
            recommendImgSize('auto', '100%');
        } else {
            recommendImgSize('100%', 'auto');
        };
    });

});