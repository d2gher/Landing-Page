// get the elemets we're going to modified
const HTML = document.querySelector("html");
const TOPBUTTON = document.querySelector("#to-top");
const navBar = document.querySelector(".nav-list");


//build the nav bar
for(let i = 1; i <= 6; i++) {
    let section = document.createElement("li");
    section.setAttribute("class", "nav-item");
    let link = document.createElement("a");
    link.setAttribute("class", "nav-link");
    link.textContent = "section " + i;
    // scroll into the view when the link is clicked 
    link.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("section" + i).scrollIntoView({behavior: "smooth"});
    })
    section.appendChild(link);
    navBar.appendChild(section)
}

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
}
// hide the nav bar when we scroll and show/hide the scroll up button
document.addEventListener("scroll", function() {
    // hide of show the to top button based on our location in the page
    if (HTML.scrollTop > 300) {
        TOPBUTTON.style.display = "block";
    }
    else {
        TOPBUTTON.style.display = "none";
    }
    // highlight post in view and it's link in the nav bar
    let sections = document.querySelectorAll("section");
    // once we scroll we run this for every post
    sections.forEach(function(element) {
        // detect when the section is in view and add active class to it 
        if (element.getBoundingClientRect().top < 300 && element.getBoundingClientRect().bottom > 300) {
            element.setAttribute("class", "active");
            let links = document.querySelectorAll("nav ul li a");
            // highlight the link in the nav bar that is connected to this section;
            links.forEach(function(link) {
                let number = element.id.indexOf("n");
                
                if (link.textContent == "section " + element.id.substring(number + 1)) {
                    link.setAttribute("class", "active");
                } else {
                    link.removeAttribute("class");
                }
            });
        } 
        else {
            element.removeAttribute("class");
        }
    });
});

// scroll up when the button is clicked
TOPBUTTON.addEventListener("click", function() {
    HTML.scrollTop = 0;
});
