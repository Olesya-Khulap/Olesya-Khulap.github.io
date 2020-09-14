$(function() {

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

        if (scrollOffset > introH) {
            header.addClass("fixed");
            header.addClass("dark");
        } else {
            header.removeClass("fixed");
            header.removeClass("dark");
        }

    }


    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        // console.log(blockOffset);

        $("nav a ").removeClass("active");

        $(this).addClass("active");

        $("nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
            
        $("html, body").animate({
            scrollTop: blockOffset - 100
        }, 500); 
        
    });


    // Menu nav toggle

    $("#nav_toggle").on("click", function(event) {

        event.preventDefault();

        $(this).toggleClass("active");
        $("nav").toggleClass("active");
        $("header").toggleClass("dark");

    });


});