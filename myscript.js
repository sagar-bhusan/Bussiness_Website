//Hero text 
function changeHeroText() {
    const heroText = document.getElementById("hero-text");
    const texts = ["Welcome to", "Hello from", "Namaste from"];
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


// JavaScript code for gallery slider movement
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let pauseButton = document.getElementById('pause');

let lengthItems = items.length - 1;
let active = 0;
let isPaused = false;
let refreshInterval;
let touchStartX = 0;
let touchEndX = 0;

next.onclick = function () {
    if (!isPaused) {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
}

prev.onclick = function () {
    if (!isPaused) {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }
}


pauseButton.onclick = function () {
    isPaused = !isPaused;
    togglePauseButton();
    
    if (!isPaused) {
        refreshInterval = setInterval(() => { next.click() }, 3000);
    }
}


dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
});

slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; 
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > swipeThreshold) {
        // Swipe left
        if (!isPaused) {
            active = active - 1 >= 0 ? active - 1 : lengthItems;
            reloadSlider();
        }
    } else if (swipeDistance < -swipeThreshold) {
        // Swipe right
        if (!isPaused) {
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        }
    }
}

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);

    if (!isPaused) {
        refreshInterval = setInterval(() => { next.click() }, 3000);
    }
}


function togglePauseButton() {
    pauseButton.textContent = isPaused ? '||' : '<>';
    pauseButton.style.display = 'inline-block'; // Always show the button, but update text
}


// Initial setup
togglePauseButton();
refreshInterval = setInterval(() => { next.click() }, 3000);

window.onresize = function (event) {
    reloadSlider();
};


// to prevent save images(r click)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// custom pop up for new year (LIMITED TIME UPDATE ONLY)
    // document.addEventListener('DOMContentLoaded', function () {
    //     Swal.fire({
    //         title: '<span class="custom-title">Team Analog & Digital wishes you Happy New Year 2024 !</span>',
    //         html:``,
    //         showCloseButton: false,
    //         showCancelButton: false ,
    //         focusConfirm: true,
    //         confirmButtonText:`<i class="fa fa-thumbs-up"></i> Explore Website`,
    //         confirmButtonArialLabel: "Thumbs up,great!",
    //         customClass:{
    //             confirmButton: 'custom-confirm-button'
                
    //         },
    //         titleClass:'custom-title',
    //         width: 600,
    //         padding: "3em",
    //         color: "#ffffff",
    //         background: "#fff url(Images/party-38.gif)",
    //         backdrop: `
    //             rgba(12, 53, 106, 0.5)
    //         `
    //       });
    // });









