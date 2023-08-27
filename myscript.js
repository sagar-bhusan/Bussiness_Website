// Smooth scrolling for navigation links
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                500, // Adjust the duration as needed
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// Show or hide the back-to-top button based on scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#back-to-top').addClass('show');
    } else {
        $('#back-to-top').removeClass('show');
    }
});

// Scroll to top with smooth transition
$('#back-to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1000); // Adjust the duration as needed
});

// Show loading screen overlay
//document.body.classList.add('loading-overlay');

// Hide loading screen overlay when page is fully loaded
window.addEventListener('load', function () {
    document.body.classList.remove('loading-overlay');
});


// JavaScript code for gallery slider movement
    $(document).ready(function() {
        $('.gallery-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '0',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });











