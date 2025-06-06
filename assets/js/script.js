'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.dataset.page;

    // Toggle pages
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Toggle nav links
    navigationLinks.forEach(nav => {
      if (nav === this) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});


// Enable
//  horizontal drag scrolling on .stack-list
const stackList = document.querySelector(".stack-list");

let isDown = false;
let startX;
let scrollLeft;

stackList.addEventListener("mousedown", (e) => {
  isDown = true;
  stackList.classList.add("dragging");
  startX = e.pageX - stackList.offsetLeft;
  scrollLeft = stackList.scrollLeft;
});

stackList.addEventListener("mouseleave", () => {
  isDown = false;
  stackList.classList.remove("dragging");
});

stackList.addEventListener("mouseup", () => {
  isDown = false;
  stackList.classList.remove("dragging");
});

stackList.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - stackList.offsetLeft;
  const walk = (x - startX) * 2; // sensitivity
  stackList.scrollLeft = scrollLeft - walk;
});
stackList.addEventListener("wheel", function (e) {
  // Only scroll horizontally, not vertically
  if (e.deltaY !== 0) {
    e.preventDefault();
    stackList.scrollLeft += e.deltaY;
  }
});
