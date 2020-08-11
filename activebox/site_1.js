$(function() {


    // FIXED HEADER
    //объявляем переменную
    let header = $("#header");
    let intro = $("#intro");
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    // innerHeight с paddingами, а height без
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    // что-то делаем при скролле
    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        // console.log(scrollPos);

        checkScroll(scrollPos, introH);
        
    });

    function checkScroll (scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        };
    }


    // SMOOTH SCROLL
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll'); 
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });



    // NAV TOGGLE

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    // REWIEWS

    let slider = $("#reviewsSlider");

    
    slider.slick({
        infinite: true, //бесконечно переворачиваются
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

});