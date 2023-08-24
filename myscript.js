 // Smooth scrolling for navigation links
 $(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                500, // Adjust the duration as needed
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// Show or hide the back-to-top button based on scrolling
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#back-to-top').addClass('show');
    } else {
        $('#back-to-top').removeClass('show');
    }
});

// Scroll to top with smooth transition
$('#back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800); // Adjust the duration as needed
});

// Show loading screen overlay
//document.body.classList.add('loading-overlay');

// Hide loading screen overlay when page is fully loaded
window.addEventListener('load', function() {
    document.body.classList.remove('loading-overlay');
});

  // Check if the visit count is stored in sessionStorage
  if (sessionStorage.getItem("visits")) {
    var visits = parseInt(sessionStorage.getItem("visits"));
    document.getElementById("visit-counter").textContent = visits;
} else {
    var visits = 1;
    sessionStorage.setItem("visits", visits);
    document.getElementById("visit-counter").textContent = visits;
}




