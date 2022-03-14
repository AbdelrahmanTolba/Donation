"use strict";
const headerBtn = document.querySelector(".headerBtn");
const headerSec = document.querySelector("#header");

const aboutBtn = document.querySelector(".aboutBtn");
const aboutSec = document.querySelector("#about");

const storiesBtn = document.querySelector(".storiesBtn");
const storiesSec = document.querySelector(".stories");

const contactBtn = document.querySelector(".contactBtn");
const contactSec = document.querySelector(".contact");

const stories_btn = document.querySelector(".stories__btn");

aboutBtn.addEventListener("click", function (e) {
  aboutSec.scrollIntoView({ behavior: "smooth" });
});
headerBtn.addEventListener("click", function (e) {
  headerSec.scrollIntoView({ behavior: "smooth" });
});
storiesBtn.addEventListener("click", function (e) {
  storiesSec.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", function (e) {
  const contsec = contactSec.getBoundingClientRect();
  window.scrollTo({
    left: contsec.left + window.pageXOffset,
    top: contsec.top + window.pageYOffset,
    behavior: "smooth",
  });
  // contactSec.scrollIntoView({ behavior: "smooth" });
});

stories_btn.addEventListener("click", function (e) {
  headerSec.scrollIntoView({ behavior: "smooth" });
});
