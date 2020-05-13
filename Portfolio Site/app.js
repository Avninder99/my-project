// TypeWriter
new TypeIt("#heading-text", {
    speed: 60,
    loop: true
}).type("\"Who We Are ?\"")
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
//const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

/*hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("changer");
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});*/

// scroll animate background navbar
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 120) {
            $(".nav").addClass("active");
        } else {

            $(".nav").removeClass("active");
        }
    });
});

// project card section code

// card selector
const card1 = document.querySelector(".card1"),
      card2 = document.querySelector(".card2"),
      card3 = document.querySelector(".card3"),
      card4 = document.querySelector(".card4"),
      card5 = document.querySelector(".card5"),
      card6 = document.querySelector(".card6");

//heading1 selectors
const heading1_1 = document.querySelector(".heading1-1"),
      heading1_2 = document.querySelector(".heading1-2"),
      heading1_3 = document.querySelector(".heading1-3"),
      heading1_4 = document.querySelector(".heading1-4"),
      heading1_5 = document.querySelector(".heading1-5"),
      heading1_6 = document.querySelector(".heading1-6");

//heading2 selectors
const heading2_1 = document.querySelector(".heading2-1"),
      heading2_2 = document.querySelector(".heading2-2"),
      heading2_3 = document.querySelector(".heading2-3"),
      heading2_4 = document.querySelector(".heading2-4"),
      heading2_5 = document.querySelector(".heading2-5"),
      heading2_6 = document.querySelector(".heading2-6");

//para selectors
const para1_1 = document.querySelector(".para1-1"),
      para1_2 = document.querySelector(".para1-2"),
      para1_3 = document.querySelector(".para1-3"),
      para1_4 = document.querySelector(".para1-4"),
      para1_5 = document.querySelector(".para1-5"),
      para1_6 = document.querySelector(".para1-6");
      

card1.addEventListener("mouseenter",function(){
    heading1_1.classList.add("changer1");
    heading2_1.classList.add("changer2");
    para1_1.classList.add("changer3");
});
card2.addEventListener("mouseenter",function(){
    heading1_2.classList.add("changer1");
    heading2_2.classList.add("changer2");
    para1_2.classList.add("changer3");
});
card3.addEventListener("mouseenter",function(){
    heading1_3.classList.add("changer1");
    heading2_3.classList.add("changer2");
    para1_3.classList.add("changer3");
});
card4.addEventListener("mouseenter",function(){
    heading1_4.classList.add("changer1");
    heading2_4.classList.add("changer2");
    para1_4.classList.add("changer3");
});
card5.addEventListener("mouseenter",function(){
    heading1_5.classList.add("changer1");
    heading2_5.classList.add("changer2");
    para1_5.classList.add("changer3");
});
card6.addEventListener("mouseenter",function(){
    heading1_6.classList.add("changer1");
    heading2_6.classList.add("changer2");
    para1_6.classList.add("changer3");
});


card1.addEventListener("mouseleave",function(){
    heading1_1.classList.remove("changer1");
    heading2_1.classList.remove("changer2");
    para1_1.classList.remove("changer3");
});
card2.addEventListener("mouseleave",function(){
    heading1_2.classList.remove("changer1");
    heading2_2.classList.remove("changer2");
    para1_2.classList.remove("changer3");
});
card3.addEventListener("mouseleave",function(){
    heading1_3.classList.remove("changer1");
    heading2_3.classList.remove("changer2");
    para1_3.classList.remove("changer3");
});
card4.addEventListener("mouseleave",function(){
    heading1_4.classList.remove("changer1");
    heading2_4.classList.remove("changer2");
    para1_4.classList.remove("changer3");
});
card5.addEventListener("mouseleave",function(){
    heading1_5.classList.remove("changer1");
    heading2_5.classList.remove("changer2");
    para1_5.classList.remove("changer3");
});
card6.addEventListener("mouseleave",function(){
    heading1_6.classList.remove("changer1");
    heading2_6.classList.remove("changer2");
    para1_6.classList.remove("changer3");
});
