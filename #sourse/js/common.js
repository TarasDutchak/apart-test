$(document).ready(function () {
    $('.mainslider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        speed: 1200,
    });



    var $slickElement = $('.gallery');
    var $slickElementCount = $('.pagingInfo__count');
    var $slickElementAll = $('.pagingInfo__all');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $slickElementCount.text('0' + i);
            $slickElementAll.text(' / 0' + slick.slideCount);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $slickElementCount.text(i);
            $slickElementAll.text(' / ' + slick.slideCount);
        }

    });

    $slickElement.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // autoplay: true,
        // autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 300,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    // menu
    $('.submenu > a').click(function () {
        $(this).toggleClass('menuarrrotate');
        $(this).next('.sublist').slideToggle();
    });

    $('.header__language span').click(function () {
        $(this).toggleClass('menuarrrotate');
        $(this).next('ul').slideToggle();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $()
        }
    });


    // header 
    $(function () {
        var lastScrollTop = 0,
            delta = 15;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;
            if ((st > lastScrollTop) && (lastScrollTop > 0)) {
                // downscroll code
                $(".header__whiteline").slideUp('hideline');

            } else {
                // upscroll code
                $(".header__whiteline").slideDown('hideline');
            }
            lastScrollTop = st;
        });
    });

    // to top

    $(function () {
        $('.footer .totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });

    $('.burger').click(function () {
        $('.mobwrapp').addClass('show');
    });
    $('.closemenu').click(function () {
        $('.mobwrapp').removeClass('show');
    });
    $('.mobtelbox').click(function () {
        $(this).find('ul').slideToggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.mobtelbox').length) {
            $('.mobtelbox').find('ul').slideUp();
        }
    });

    $('.closemodal, .fullscreenmodal__btns a').click(function (e) {
        e.preventDefault();
        $('.fullscreenmodal').fadeOut();
    });

    // room sliders
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        dots: false,
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // faq

    $('.faq-closeshow').click(function () {
        $(this).parents('.faqsection__box').find('.faqsection__body').slideToggle();
        $(this).parents('.faqsection__box').find('.faqsection__header').toggleClass('arrowimg');
    });

    $('.telnum').inputmask({
        "mask": "+ 99 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });















});