(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);

// {
//     $(document).ready(function () {
//         // On page load, apply saved active href
//         const activeHref = localStorage.getItem('activeCountry');
//         if (activeHref) {
//           $('.country__bar_main a[href="' + activeHref + '"]').addClass('active');
//         }
    
//         // On click, set active class and save to localStorage
//         $('.country__bar_main a').on('click', function () {
//           localStorage.setItem('activeCountry', $(this).attr('href'));
//         });
//       });
// }

// $(document).ready(function () {
//     const $bar = $('.country__bar_main');

//     // On page load, apply saved active href
//     const activeHref = localStorage.getItem('activeCountry');
//     if (activeHref) {
//         const $activeLink = $bar.find('a[href="' + activeHref + '"]');
//         $activeLink.addClass('active');
//         scrollToCenter($activeLink);
//     }

//     // On click, set active class, save to localStorage and scroll to center
//     $bar.on('click', 'a', function (e) {
//         localStorage.setItem('activeCountry', $(this).attr('href'));
//         scrollToCenter($(this));
//     });

//     // Function to scroll the clicked link into the horizontal center
//     function scrollToCenter($el) {
//         const elOffset = $el.position().left;
//         const elWidth = $el.outerWidth(true);
//         const containerWidth = $bar.width();
//         const scrollLeft = $bar.scrollLeft();

//         const newScrollLeft = scrollLeft + elOffset - (containerWidth / 2) + (elWidth / 2);
//         $bar.animate({ scrollLeft: newScrollLeft }, 400); // smooth scroll
//     }
// });
$(document).ready(function () {
    const $bar = $('.country__bar_main');

    // Get current page name (e.g., "/france-visa-detail.html")
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();

    // Loop through each link to find a match
    const $activeLink = $bar.find('a').filter(function () {
        const linkHref = $(this).attr('href').split('/').pop().toLowerCase();
        return linkHref === currentPage;
    }).first();

    // Apply active class and scroll to center
    if ($activeLink.length) {
        $activeLink.addClass('active');
        scrollToCenter($activeLink);
    }

    // Scroll to center function
    function scrollToCenter($el) {
        const elOffset = $el.position().left;
        const elWidth = $el.outerWidth(true);
        const containerWidth = $bar.width();
        const scrollLeft = $bar.scrollLeft();

        const newScrollLeft = scrollLeft + elOffset - (containerWidth / 2) + (elWidth / 2);
        $bar.animate({ scrollLeft: newScrollLeft }, 400);
    }
});

