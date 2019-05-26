focusWithin.polyfill(".focus-within")

// ###MAIN-MENU-OPEN-CLOSE###

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// ###MODAL-ORDER-OPEN-CLOSE###

var links = document.querySelectorAll(".order-button");
var popup = document.querySelector(".order-modal");
var modalBackground = document.querySelector(".modal-background");

var close = popup.querySelector(".order-modal__button");
var form = popup.querySelector(".order-modal__form");

for (var i=0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    modalBackground.classList.add("modal-show");
  });
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  modalBackground.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      modalBackground.classList.remove("modal-show")
    }
  }
});
