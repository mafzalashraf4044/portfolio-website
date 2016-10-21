$(".button-collapse").sideNav();

$(document).ready(function() {
    $('#scroll-top').fadeOut();
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scroll-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});


$(document).ready(function(){
   $('.slider').slider({full_width: true});
 });


 $(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();
 });

window.setTimeout(function() {
    var spinner = document.getElementsByClassName('spinner')[0];
    document.getElementsByTagName('body')[0].removeChild(spinner);
    $(".body").addClass('show');
}, 3000);

$(document).ready(function() {
    $('.parallax').parallax();
});


$(window).scroll(function() {

    if ($(window).scrollTop() > $(window).height()) {
        $('nav').css({
            'position': 'fixed',
            'top': '0px',
            'left': '0px'
        });

        $('.main-page').css('padding-top', '64px');
    } else {
        $('nav').css('position', 'static');
        $('.main-page').css('padding-top', '0px');
    }
});
