$(document).ready(function(){

  // Scroll Function to move Navbar
    $(document).scroll(function(){
      let $nav = $("#mainNavbar");
      
      // Move 768px+ Nav from Top to Left side of screen
      if ($(window).width() >= 768) {
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());      
      }

    });

  // Navigation background color toggle
  $("#navbarToggler").on("click", function(){
    grayBackgrounds();
  });

  // Close menu if item is clicked
  $(".nav-link").on("click", function(){
    $("#hamburgerNav").toggleClass("show");
    grayBackgrounds();
  });

  // DRY function for Background color changes
  function grayBackgrounds() {
    $("#mainNavbar").toggleClass("grayBackground");
    $("#hamburgerNav").toggleClass("grayBackground");
  }

});