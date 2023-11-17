let navbarToggler = document.querySelector(".navbar-toggler"); 

navbarToggler.onclick = function () {

    navbarToggler.classList.toggle("active");

    let linksInside = document.querySelector(".links-inside");
    
    if (navbarToggler.classList.contains("active")) {

            linksInside.classList.remove("none");

    } else {

        linksInside.classList.add("none");

    }

}