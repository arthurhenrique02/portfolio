// enable hamburger menu
let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute("id");

        // change the current active link on nav bar
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });
    // sticky nav bar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when clin on a link
    menuToggle.classList.remove("fa-x");
    navbar.classList.remove("active");
}

// toggle hamburger menu
let menuToggle = document.querySelector("#hamburger-icon");
let navbar = document.querySelector(".navbar");

menuToggle.onclick = () => {
    // change display of hamburger menu
    // show X instead the three bars
    menuToggle.classList.toggle("fa-x");
    // show/disable the nav bar
    navbar.classList.toggle("active");

}
