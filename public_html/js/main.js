$(document).ready(function () {

    function checkHeader() {
        let headerHeight = $('header').innerHeight();
        $('main').css('margin-top', headerHeight);
    }
    checkHeader();
    $(window).resize(function () {
        checkHeader();
    });
});
function animation() {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    $('.animation').each(function () {
        let position = $(this).offset().top;
        let animation = $(this).attr('data-animation');
        let delay = $(this).attr('data-delay');
        if (position < scroll + windowHeight - 100) {
            $(this).css('animation-delay', delay);
            $(this).addClass(animation);
        }
    });
}
animation();
$(window).scroll(function () {
    animation();
    animateHeader();
});
if ($('.blog-slider').length > 0) {
    $('.blog-slider').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1

    });
}


if ($('.contact-form').length > 0) {

//FORM VALIDATION
    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
            },
            rules: {
                name: {
                    required: true

                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }


            },
            messages: {
                name: {
                    required: "Field is reguired"

                },
                email: {
                    required: "Field is reguired",
                    email: "Please enter a valid email adress"
                },
                subject: {
                    required: "Field is reguired"
                },
                message: {
                    required: " Field is reguired"
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
            }

        });
    });
}


if ($('.blog-home-slider').length > 0) {
    $('.blog-home-slider').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        navText: ['<span class="fa fa-chevron-left"></span> <span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span><span class="fa fa-chevron-right"></span>'],
        pagination: true,
        paginationNumber: true,
        dots: true,
        dotsData: true


    });
    $('.owl-dots').each(function () {
        $(this).children('button').text($(this).index() + 1);
    });
}