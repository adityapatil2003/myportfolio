
// ------Sticky Navbar-------

window.addEventListener('scroll', function(){
    let navbar = document.getElementById('navbar')
    if(window.scrollY > 30){
        navbar.classList.add("sticky-nav")
    }
    else{
        navbar.classList.remove("sticky-nav")

    }
})

// ------Hamburger Menu-------

var navLinks = document.getElementById("navLinks");

      function showMenu() {
        navLinks.style.top = "170px";
      }
      function hideMenu() {
        navLinks.style.top = "-200px";
      }

// ----------footer-date----------

let footerDate = document.getElementById("footer-date")
footerDate.innerHTML = new Date().getFullYear();

// ----------Got to top arrow----------

let go_up = document.getElementById('top')

window.addEventListener('scroll', function(){
  if(window.scrollY > 500){
    go_up.style.left="94%"
  }else{
    go_up.style.left="120%"

  }
})

// ----------Theme switch----------

let sun = document.getElementById("sun")

sun.onclick = function(){
  document.body.classList.toggle("light-theme")
  if(document.body.classList.contains("light-theme")){
    sun.className = "fa-regular fa-moon";
  }else{
    sun.className = "fa-regular fa-sun";

  }

}