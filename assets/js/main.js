// Scroll Function to move Navbar from top to left side
window.onscroll = function() {
  moveNav();
};

function moveNav() {
  if( document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("mainNavbar").classList.add("scrolled");
  } else {
    document.getElementById("mainNavbar").classList.remove("scrolled");
  }
}