$(window).scroll(
    function () {
        if ($(window).scrollTop() > 100) {
            $('.scroll-top').fadeIn(300);
        } else {
            $('.scroll-top').fadeOut(300);
        }
    });

$(function () {
    $('.scroll-top').click(
        function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        }
    );
});