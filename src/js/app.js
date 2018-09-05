/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.slim.min'
@codekit-prepend quiet '../../node_modules/wow.js/dist/wow.min'
@codekit-prepend quiet '../../node_modules/slick-carousel/slick/slick.min'
*/

$(document).ready(function () {
    // Initialise WOW
    new WOW().init();

    // Scroll to hash
    $('a.scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

// Mobile nav

$('.header--nav-toggle').click(function () {
    $(this).toggleClass('open');
    $('.header--mobile-box').toggleClass('show');
    $('.header--filter').toggleClass('show');
    $('html').toggleClass('fix');
    $('body').toggleClass('fix');
});

$('.header--filter, .mobile-box--close-btn').click(function () {
    $('.header--mobile-box').removeClass('show');
    $('.header--filter').removeClass('show');
    $('.header--nav-toggle').removeClass('open');
    $('html').removeClass('fix');
    $('body').removeClass('fix');
});


// Autohide header

var mainHeader = $('header'),
    secondaryNavigation = $('.cd-secondary-nav'),
    //this applies only if secondary nav is below intro section
    belowNavHeroContent = $('.sub-nav-hero'),
    headerHeight = mainHeader.height();

//set scrolling variables
var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

mainHeader.on('click', '.nav-trigger', function (event) {
    // open primary navigation on mobile
    event.preventDefault();
    mainHeader.toggleClass('nav-open');
});

$(window).on('scroll', function () {
    if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ?
        setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
    }
});

$(window).on('resize', function () {
    headerHeight = mainHeader.height();
});

function autoHideHeader() {
    var currentTop = $(window).scrollTop();

    (belowNavHeroContent.length > 0) ?
    checkStickyNavigation(currentTop) // secondary navigation below intro
        : checkSimpleNavigation(currentTop);

    previousTop = currentTop;
    scrolling = false;
}

function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
        //if scrolling up...
        mainHeader.removeClass('is-hidden');
    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        //if scrolling down...
        mainHeader.addClass('is-hidden');
    }
}

$('.carousel_slider').slick({
    centerMode: true,
    centerPadding: '17.2%',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 10 16"><g transform="matrix(1,0,0,1,-94,-1046)" fill="#ff832a"><path d="M96.222,1054.77815c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0v0c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421l7.07107,-7.07107c0.35355,-0.35355 1.06066,-0.35355 1.41421,0v0c0.35355,0.35355 0.35355,1.06066 0,1.41421z" /><path d="M103.29307,1061.84923c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0l-7.07107,-7.07107c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421v0c0.35355,-0.35355 1.06066,-0.35355 1.41421,0l7.07107,7.07107c0.35355,0.35355 0.35355,1.06066 0,1.41421z" /></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" version="1.1" viewBox="0 0 10 16"><g transform="matrix(1,0,0,1,-1176,-1046)" fill="#ff832a"><path d="M1183.778,1053.22185c0.35355,-0.35355 1.06066,-0.35355 1.41421,0v0c0.35355,0.35355 0.35355,1.06066 0,1.41421l-7.07107,7.07107c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0v0c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421z"/><path d="M1176.70693,1046.15077c0.35355,-0.35355 1.06066,-0.35355 1.41421,0l7.07107,7.07107c0.35355,0.35355 0.35355,1.06066 0,1.41421v0c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0l-7.07107,-7.07107c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421z"/></g></svg></button>'
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 3
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //     }
    // ]
});

$('.analysis_slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true
})

