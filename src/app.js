import { reviewers } from './reviewers';
import { slideGallery } from './gallery';
import { menu } from './menu';
import { handleModal } from './map-modal';
import { questions } from './questions';



// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();



// ********** links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


// ********** fix navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    // go back to top link
    
    if (scrollHeight > 500) {
        console.log("hello");

        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});



// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
    e.preventDefault();
    // navigate to specific point
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    
    if (!fixedNav) {
        position = position - navHeight;
    }
    if (navHeight > 82) {
        position = position + containerHeight;
    }
    
    window.scrollTo({
        left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
});
});

// ********** import reviewers section ************
reviewers();
// ********** import gallery section ************
slideGallery();
// ********** import menu section ************
menu();
// ********** import map/modal ************
handleModal();
// ********** import Q&A section ************
questions();
