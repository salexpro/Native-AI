/* eslint no-unused-vars: ['off'] */
/* global WOW, checkStickyNavigation, svg4everybody */
/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min'
@codekit-prepend quiet '../../node_modules/wow.js/dist/wow.min'
@codekit-prepend quiet '../../node_modules/cookies-js/dist/cookies.min.js';
@codekit-prepend quiet '../../node_modules/slick-carousel/slick/slick.min'
@codekit-prepend quiet '../../node_modules/inputmask/dist/inputmask/inputmask.js'
@codekit-prepend quiet '../../node_modules/inputmask/dist/inputmask/inputmask.extensions.js'
@codekit-prepend quiet '../../node_modules/inputmask/dist/inputmask/jquery.inputmask.js'
@codekit-prepend quiet '../../node_modules/svg4everybody/dist/svg4everybody.min.js'

@codekit-append quiet 'components/_header.js';
@codekit-append quiet 'components/_forms.js';
@codekit-append quiet 'components/_carousel.js';
*/

new WOW().init();
svg4everybody();

// $(document).ready(function () {
// Initialise WOW

//     // Scroll to hash
//     $('a.scroll').click(function () {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 500);
//                 return false;
//             }
//         }
//     });
// });