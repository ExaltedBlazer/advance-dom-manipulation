'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//=======================================================================================//
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//=======================================================================================//

//=======================================================================================//
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//=======================================================================================/
btnsOpenModal.forEach(btnOpenModal => btnOpenModal.addEventListener("click", openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//=======================================================================================//

//=======================================================================================/
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//=======================================================================================//

//=======================================================================================/
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll(".section");
document.querySelectorAll('.section');

document.getElementById("section--1");
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

const message = document.createElement('div');
message.classList.add('cookie-message')
// message.textContent = "We use cookies for improved funcionality and analytics.";
message.innerHTML = "We use cookies for improved funcionality plus more. <button class='btn btn--close-cookie'>Got it!</button>";
message.style.color = "black";

// header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

const btnClose = document.querySelector('.btn--close-cookie');

btnClose.addEventListener('click', function () {
  message.remove();
});
message.style.backgroundColor = "#e38c0b";
message.style.padding = "5px";
message.style.width = "110%";
const testImg = document.querySelector("#features__img");
console.log(testImg.alt);
console.log(message);



// //======================================================//
// const imgDiv = document.createElement("div");
// const imgElem = document.createElement("img");
// imgElem.setAttribute("src", "img/test-pic.gif");
// imgDiv.appendChild(imgElem);
// header.appendChild(imgDiv);
// //=====================================================//
// console.log(imgDiv);