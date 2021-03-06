$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<div class="owl-arrow owl-arrow-left"><span class="fa-stack" style="vertical-align: top;"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-chevron-left fa-stack-1x fa-inverse"></i></span></div>', '<div class="owl-arrow owl-arrow-right"><span class="fa-stack" style="vertical-align: top;"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-chevron-right fa-stack-1x fa-inverse"></i></span></div>'],
    autoplayHoverPause: true,
    responsive: {
        300: {
            items: 1
        }
    },
    onInitialized: function () {
        aff_titre(this.$element);
    }
});
owl = $('.owl-carousel').owlCarousel();
//activate title
owl.on('translated.owl.carousel', function (event) {
    aff_titre($(this));
    $('.etape-caroussel').trigger('stop.owl.autoplay')

});

//no autoplay on the etape carousel
$(function () {
    $('.etape-caroussel').trigger('stop.owl.autoplay')
})
//common function for modify title and description
function aff_titre(div) {
    var comment = $(div).find('.active').find('img').attr('alt');
    var title = $(div).find('.active').find('img').attr('title');
    if (title) $(div).prev().find('.owl-titre').html(title)
    if (comment) $(div).prev().find('.owl-comment').html(comment);
}
