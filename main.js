$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("nav").css({ "background": "#fff", "box-shadow": "0px 2px 8px 0px rgba(50, 50, 50, 0.08)" });
            $('nav').css('top', '0px');
            $('top-nav').css('display', 'none');
        }
        else {
            $("nav").css({ "background": "#fff", "box-shadow": "none" });
            $('nav').css('top', '32px');
            $('top-nav').css('display', 'block');
        }
    });
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        900,
        'linear'
    )
});

$('#menu').on('click', function () {
    $('.links').slideToggle();
    $('.links').css('display', 'flex');
    $('.icons').toggle();
});

$(window).resize(function () {
    if ($(window).outerWidth() < 780) {
        $(".links").css("display", "none")
        $('.icons').css('display', 'none')
    } else {
        $(".links").css("display", "flex")
        $('.icons').css('display', 'block')
    }
});

$('.links a').on('click', function () {
    $('.links a').removeClass('active');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
    if ($('.links').css('display') == 'flex') $('.links').slideUp('slow');
    if ($('.icons').css('display') == 'block') $('.icons').toggle();
});