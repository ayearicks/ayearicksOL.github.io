// Global Variables
let home      = document.getElementById("homeLink"),
    projects  = document.getElementById("projectLink"),
    about     = document.getElementById("aboutLink"),
    resume    = document.getElementById("resumeLink"),
    contact   = document.getElementById("contactLink"),
    content   = document.getElementById("content");


// Event Listeners for each navigation button
home.addEventListener("click", function(){ pageChange(this.getAttribute("href")); });
projects.addEventListener("click", function(){ pageChange(this.getAttribute("href")); });
about.addEventListener("click", function(){ pageChange(this.getAttribute("href")); });
resume.addEventListener("click", function(){ pageChange(this.getAttribute("href")); });
contact.addEventListener("click", function(){ pageChange(this.getAttribute("href")); });

// Update Div function
function pageChange(tar) {
  /*
  if link clicked equals id of target
  change display of current content
  toggle display of target content
  else
  change display to match clicked target
  */
 switch (tar) {
   case ('#home'):
     document.getElementById("home").classList.toggle("d-none");
     document.getElementById("home").classList.add("d-flex");
     break;
   case ('#projects'):
     document.getElementById("projects").classList.toggle("d-none");
     document.getElementById("projects").classList.toggle("d-flex");
     break;
   case ('#about'):
     document.getElementById("about").classList.toggle("d-none");
     document.getElementById("about").classList.toggle("d-flex");
     break;
   case ('#resume'):
     document.getElementById("resume").classList.toggle("d-none");
     document.getElementById("resume").classList.toggle("d-flex");
     break;
   case ('#contact'):
     document.getElementById("contact").classList.toggle("d-none");
     document.getElementById("contact").classList.toggle("d-flex");
     break;
 
   default:
     break;
 }
console.log(tar);

}