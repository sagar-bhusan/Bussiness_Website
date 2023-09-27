// Check if the visit count is stored in localStorage
if (localStorage.getItem("visits")) {
    var visits = parseInt(localStorage.getItem("visits"));
    document.getElementById("visit-counter").textContent = visits;
} else {
    var visits = 1;
    localStorage.setItem("visits", visits);
    document.getElementById("visit-counter").textContent = visits;
}
