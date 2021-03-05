$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoPlay: 3000,
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