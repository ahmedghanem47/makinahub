$("#scroll-down").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".how-it-work").offset().top
    }, 2000);
});