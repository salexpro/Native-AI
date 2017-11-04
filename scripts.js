jQuery(document).ready( function($) {

    $('.header--nav-toggle').click( function() {
        $(this).toggleClass('open');
        $('.header--mobile-box').toggleClass('show');
        $('.header--filter').toggleClass('show');
    });

    $('.header--filter, .mobile-box--close-btn').click( function() {
        $('.header--mobile-box').removeClass('show');
        $('.header--filter').removeClass('show');
        $('.header--nav-toggle').removeClass('open');
    });

});
