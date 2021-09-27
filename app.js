// get the elemets we're going to modified
const HTML = document.querySelector("html");
const TOPBUTTON = document.querySelector("#to-top");

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
            let links = document.querySelectorAll("nav a");
            // highlight the link in the nav bar that is connected to this section;
            links.forEach(function(link) {
                if (link.href == "http://127.0.0.1:5500/index.html#" + element.id) {
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
