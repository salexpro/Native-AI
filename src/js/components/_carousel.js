$('.carousel_slider').slick({
    centerMode: true,
    centerPadding: '17.2%',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 10 16"><g transform="matrix(1,0,0,1,-94,-1046)" fill="#ff832a"><path d="M96.222,1054.77815c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0v0c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421l7.07107,-7.07107c0.35355,-0.35355 1.06066,-0.35355 1.41421,0v0c0.35355,0.35355 0.35355,1.06066 0,1.41421z" /><path d="M103.29307,1061.84923c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0l-7.07107,-7.07107c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421v0c0.35355,-0.35355 1.06066,-0.35355 1.41421,0l7.07107,7.07107c0.35355,0.35355 0.35355,1.06066 0,1.41421z" /></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" version="1.1" viewBox="0 0 10 16"><g transform="matrix(1,0,0,1,-1176,-1046)" fill="#ff832a"><path d="M1183.778,1053.22185c0.35355,-0.35355 1.06066,-0.35355 1.41421,0v0c0.35355,0.35355 0.35355,1.06066 0,1.41421l-7.07107,7.07107c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0v0c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421z"/><path d="M1176.70693,1046.15077c0.35355,-0.35355 1.06066,-0.35355 1.41421,0l7.07107,7.07107c0.35355,0.35355 0.35355,1.06066 0,1.41421v0c-0.35355,0.35355 -1.06066,0.35355 -1.41421,0l-7.07107,-7.07107c-0.35355,-0.35355 -0.35355,-1.06066 0,-1.41421z"/></g></svg></button>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                centerPadding: '14%'
            }
        },
        {
            breakpoint: 641,
            settings: {
                arrows: false,
                centerPadding: '10%'
            }
        }
    ]
});

const analysis_slider = $('.analysis_slider');

analysis_slider.slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
            breakpoint: 961,
            settings: {
                vertical: false,
                verticalSwiping: false,
                adaptiveHeight: true,
                dots: false,
                variableWidth: true
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                autoplay: false
            }
        }
    ]
})

analysis_slider.on('wheel', (function (e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
        analysis_slider.slick('slickPrev');
    } else {
        analysis_slider.slick('slickNext');
    }
}));