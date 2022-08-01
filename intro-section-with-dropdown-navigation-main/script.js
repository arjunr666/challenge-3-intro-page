/*********************************/
/* DROP DOWN MENU */
/*********************************/
const headerEl = document.querySelector(".section-header");
const dropbtnEL = document.querySelector(".btn-feature");
dropbtnEL.addEventListener("click", function () {
  headerEl.classList.toggle("open-menu-feature");
});

const dropbtn2El = document.querySelector(".btn-company");
dropbtn2El.addEventListener("click", function () {
  headerEl.classList.toggle("open-menu-company");
});

/*********************************/
/* MOBILE NAVIGATION */
/*********************************/

const btnEl = document.querySelector(".menu-btn");
btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});
