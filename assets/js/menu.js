// Global Variables
let menuLink = document.querySelectorAll(".nav-link");
let mobileMenu = document.querySelector(".navbar-collapse");

// Display function
function display() {
    if (mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show");
    } else {
        mobileMenu.classList.add("show");
    }
}

// Loop to add event listener to all menu links
menuLink.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", display);
    }
)

