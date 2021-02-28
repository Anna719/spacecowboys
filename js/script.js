
$(document).ready(function(){

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    $("#card2").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card3").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card4").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card5").flip({
        axis: 'x',
        trigger: 'click'
    });


    // navbar bg change on scroll

});
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
