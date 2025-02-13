$('nav div').on('click', function () {
    $('ul').slideToggle();
    $('ul ul').css('display', 'none');
});


$('ul li').on('click', function () {
    $(this).find('ul').slideToggle();
});


$(window).resize(function () {
    if ($(window).width() > 768) {
        $('ul').removeAttr('style');
    }
});




















