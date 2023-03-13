// MOBILE MENU
const menuBtn = document.querySelector("[menuBtn]");
const navMenu = document.querySelector("[navMenu]");
menuBtn.addEventListener("click", (e) => {
  navMenu.classList.toggle("active");
  e.target.setAttribute("src", "images/icon-close-menu.svg");
  if (!navMenu.classList.contains("active")) {
    e.target.setAttribute("src", "images/icon-hamburger.svg");
  }
});
// MODAL CONTAINER
const modalContainer = document.querySelector(".modelContainer");
const openBtnModalContainer = document.querySelectorAll("[openBtn]");
const closeBtnModalContainer = document.querySelector("[closeBtn]");
openBtnModalContainer.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modelContainerPosition();
    modalContainer.classList.add("active");
  });
});
closeBtnModalContainer.addEventListener("click", (e) => {
  modalContainer.classList.remove("active");
});
// MODEL CONTAINER POSTION
const modelContainerPosition = () => {
  const container = document.querySelector(".modelContainer");
  const position = Number(
    String(document.body.getBoundingClientRect().top).slice(1)
  );
  container.style.setProperty("--top", `${position + 184}px`);
};
// HIDDEN BOX
const openBox = document.querySelectorAll(".span");
const hiddenBox = document.querySelectorAll(".hiddenBox");
openBox.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    hiddenBox[index].classList.toggle("active");
  });
});
// MODAL COMPLETED
const modalcompletedOpen = document.querySelectorAll("[modalcompletedOpen]");
const modalCompleted = document.querySelector(".modalCompleted");
const modalcompletedclose = document.querySelector("[modalcompletedclose]");
modalcompletedOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalCompleted.classList.add("active");
  });
});

modalcompletedclose.addEventListener("click", () => {
  modalCompleted.classList.remove("active");
});
// BOOKMARK
const bookmark = document.querySelector(".bookmark");
let show = false;
bookmark.addEventListener("click", (e) => {
  if (show == false) {
    bookmark.children[1].style.color = "hsl(176, 72%, 28%)";
    bookmark.children[0].setAttribute("src", "images/icon-bookmark-check.svg");
    show = true;
  } else {
    bookmark.children[1].style.color = "";
    bookmark.children[0].setAttribute("src", "images/icon-bookmark.svg");
    show = false;
  }
});
