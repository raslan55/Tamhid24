// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("scrol");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,

    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


////

var typed = new Typed(".type", {
    strings: ["creativaty born", " When we deviate from the norms !"],
    loop: true,
    backDelay: 1000,
    typeSpeed: 70,
    smartBackspace: true,
});

/////







/////
window.addEventListener('scroll', function(e) {

    if ($(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }

});


$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up  
    $(window).resize(function() {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function() {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });



    // document ready  
});