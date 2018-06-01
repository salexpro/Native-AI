/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.slim.min'
@codekit-prepend quiet '../../node_modules/wow.js/dist/wow.min'
*/

jQuery(document).ready( function($) {

    // Mobile nav

    $('.header--nav-toggle').click( function() {
        $(this).toggleClass('open');
        $('.header--mobile-box').toggleClass('show');
        $('.header--filter').toggleClass('show');
        $('body').toggleClass('fix');
    });

    $('.header--filter, .mobile-box--close-btn').click( function() {
        $('.header--mobile-box').removeClass('show');
        $('.header--filter').removeClass('show');
        $('.header--nav-toggle').removeClass('open');
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

    mainHeader.on('click', '.nav-trigger', function(event){
        // open primary navigation on mobile
        event.preventDefault();
        mainHeader.toggleClass('nav-open');
    });

    $(window).on('scroll', function(){
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(autoHideHeader, 250)
                : requestAnimationFrame(autoHideHeader);
        }
    });

    $(window).on('resize', function(){
        headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
        var currentTop = $(window).scrollTop();

        ( belowNavHeroContent.length > 0 )
            ? checkStickyNavigation(currentTop) // secondary navigation below intro
            : checkSimpleNavigation(currentTop);

        previousTop = currentTop;
        scrolling = false;
    }

    function checkSimpleNavigation(currentTop) {
        //there's no secondary nav or secondary nav is below primary nav
        if (previousTop - currentTop > scrollDelta) {
            //if scrolling up...
            mainHeader.removeClass('is-hidden');
        } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            //if scrolling down...
            mainHeader.addClass('is-hidden');
        }
    }

});

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