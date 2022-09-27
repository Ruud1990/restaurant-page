
import { reviews } from './mock-reviewers';


export function reviewers () {
    // select elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting element
let currentElement = 0;

// load initial element
window.addEventListener("DOMContentLoaded", function () {
  const element = reviews[currentElement];
  img.src = element.img;
  author.textContent = element.name;
  job.textContent = element.job;
  info.textContent = element.text;
});

// show person based on element
function showPerson(person) {
  const element = reviews[person];
  img.src = element.img;
  author.textContent = element.name;
  job.textContent = element.job;
  info.textContent = element.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentElement++;
  if (currentElement > reviews.length - 1) {
    currentElement = 0;
  }
  showPerson(currentElement);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentElement--;
  if (currentElement < 0) {
    currentElement = reviews.length - 1;
  }
  showPerson(currentElement);
});
}
