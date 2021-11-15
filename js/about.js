/* start loading screen */
$(window).ready(function (){
    "use strict";
    $("div.load").css({
        display: "none"
    });
});
/* end loading screen */
/* start dropdown sliding */
$(".navbar ul li:last-of-type").click(function () {
    "use strict";
    $("span.dropdown").slideToggle();
});

$("span.down").on("click", function () {
    "use strict";
    $(".navbar ul").slideToggle();
});
/* end dropdown sliding */
/* start navbar scrolling code */
$(window).on("scroll", function () {
    "use strict"; 
    if ($(window).scrollTop() >= 80) {
        $(".navbar").css({
            backgroundColor: "#2f3640",
            boxShadow: "1px 1px 1px #000",
            padding: "7px"
        });
        $(".navbar ul li, .nav-brand").css({
            color: "#fff"
        });
        $(".dropdown").css({
            backgroundColor: "#2f3640",
        });
    } else {
        $(".navbar").css({
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "20px"
        });
        $(".navbar ul li, .nav-brand").css({
            color: "#fff"
        });
        $(".dropdown").css({
            backgroundColor: "transparent"
        });
    }
});
/*end navbar scrolling code */
/* start section 1 scrolling code */ 
$(window).on("scroll", function () {
    "use strict";
    if ($(window).scrollTop() >= $("div.header").offset().top + 450) {
        $(".aboutPage").css({
            opacity: "1",
            transform: "translateY(0px)"
        });
    } else {
        $(".aboutPage").css({
            opacity: "0",
            transform: "translateY(200px)"
        });
    }
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
         // default 5 seonds
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            980: {
                items: 3
            }
        }
    });
  });
/* end section 3 code */
/* start footer plugin */
$(window).on("scroll", function () {
    "use strict";
    if ($(window).scrollTop() >= $("div.footer").offset().top - 200) {
        $("i.vac").css({
            opacity: "1",
            transform: "translateY(0)"
        })
    } else {
        $("i.vac").css({
            opacity: "0",
            transform: "translateY(100px)"
        })
    }
});
/* end footer plugin */