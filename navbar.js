window.addEventListener('scroll', function(){
    let navbar = document.getElementById('navbar')
    if(window.scrollY > 30){
        navbar.classList.add("sticky-nav")
    }
    else{
        navbar.classList.remove("sticky-nav")

    }
})