// TypeWriter
new TypeIt("#heading-text", {
    speed: 60,
    loop: true
}).type("?")
    .pause(2000)
    .delete()
    .type("\"Who We Are ?\"")
    .pause(3000)
    .delete()
    .pause(2000)
    .type("\"What do we do ?\"")
    .pause(3000)
    .delete()
    .pause(2000)
    .type("\"What we make ?\"")
    .pause(4000)
    .delete()
    .pause(3000)
    .type("\"How Do We Make ?\"")
    .pause(5000)
    .go();

new TypeIt("#head-main-about", {
    speed: 60,
    loop: true
}).type("[ \"About Us..\" ]")
    .pause(5000)
    .delete()
    .go()

new TypeIt("#footer-head", {
    speed: 60,
    loop: true
}).type("[ \"Contact Us..\" ]")
    .pause(5000)
    .delete()
    .go()

// Smooth Scroll effect
const scroll = new SmoothScroll(' a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});

// Navbar Hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// scroll animate background navbar
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 120 && $(".nav-links").hasClass("open")) {
            $(navbar).addClass("active");
        } else {

            $(navbar).removeClass("active");
        }
    });
});
