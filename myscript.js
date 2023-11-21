//Hero text 
function changeHeroText() {
    const heroText = document.getElementById("hero-text");
    const texts = ["Welcome to", "Hello from", "Greetings from"];
    let index = 0;

    setInterval(function() {
      heroText.classList.add("fade-out");
      setTimeout(function() {
        heroText.textContent = texts[index];
        heroText.classList.remove("fade-out");
      }, 500);
      index = (index + 1) % texts.length;
    }, 5000);
  }

  changeHeroText();


//   navbar visible on scroll down on jquery
  $(document).ready(function () {
    var navbar = $(".custom-navbar");

    var timeout;

    $(window).scroll(function () {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            var scrollPosition = $(this).scrollTop();

            if (scrollPosition > 100) {
                navbar.addClass("show-on-scroll").removeClass("hide-on-scroll");
            } else {
                navbar.removeClass("show-on-scroll").addClass("hide-on-scroll");
            }
        }, 100); // Adjust the delay time in milliseconds (e.g., 300 for 300ms)
    });
});





// //Changing text below hero image
// const changingText = document.getElementById("changing-text");
//     const texts = ["We are the future.", "We are the change.", "We are the ones who will make a difference."];
//     let index = 0;

//     setInterval(function() {
//       changingText.textContent = texts[index];
//       index = (index + 1) % texts.length;
//     }, 5000);


// To add active links color
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the "active" class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        
        // Add the "active" class to the clicked link
        link.classList.add('active');
    });
});



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
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};










