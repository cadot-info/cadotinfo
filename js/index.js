$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: ['<div class="owl-arrow owl-arrow-left"><span class="fa-stack" style="vertical-align: top;"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-chevron-left fa-stack-1x fa-inverse"></i></span></div>', '<div class="owl-arrow owl-arrow-right"><span class="fa-stack" style="vertical-align: top;"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-chevron-right fa-stack-1x fa-inverse"></i></span></div>'],
    autoplayHoverPause: true,
    responsive: {
        600: {
            items: 4
        }
    },
    onInitialized: function () {
        aff_titre($('.owl-carousel').find('.active').find('img'));
    }
});
owl = $('.owl-carousel').owlCarousel();
owl.on('translated.owl.carousel', function (event) {
    aff_titre($(this).find('.active').find('img'));

});


//common function for modify title and description
function aff_titre(activeImg) {
    div = $(activeImg).closest('.owl-loaded').prev()
    var comment = activeImg.attr('alt');
    var title = activeImg.attr('title');
    if (title) $(div).find('.owl-titre').html(title)
    if (title) $(div).find('.owl-comment').html(comment);
}
