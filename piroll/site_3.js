$(function () {


    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    
    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    }) 

    function checkScroll(scrollOffset) {

        console.log(introH);
        
        if (scrollOffset > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        console.log(blockOffset);

        $("nav a ").removeClass("active");

        $(this).addClass("active");
            
        $("html, body").animate({
            scrollTop: blockOffset
        }, 700); 
        
    });

    // Menu nav toggle

    $("#nav_toggle").on("click", function(event) {

        event.preventDefault();

        $(this).toggleClass("active");
        $("nav").toggleClass("active");

    });


    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
    });

}) 

