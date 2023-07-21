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