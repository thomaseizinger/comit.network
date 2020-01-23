//Fixed header menu on scroll - start
$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.header-block').addClass('fixed-header');
    } else {
        $('.header-block').removeClass('fixed-header');
    }
});
//Fixed header menu on scroll - end
//Smooth scroll to the section on click - start
function scrollNav() {
    $('.header-block__nav a').click(function () {
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 110
        }, 200);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();
//Smooth scroll to the section on click - end
