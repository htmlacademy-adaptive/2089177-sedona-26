const navSelector = document.querySelector('.main-nav');
const navButtonSelector = document.querySelector('.main-nav__toggle');
const headerSelector = document.querySelector('.header')

navSelector.classList.remove('main-nav--nojs');
headerSelector.classList.remove('header--nojs');

const onNavButtonSelectorClick = () =>{
  if (navSelector.classList.contains('main-nav--close')) {
    navSelector.classList.remove('main-nav--close');
    navSelector.classList.add('main-nav--open');
  } else {
    navSelector.classList.add('main-nav--close');
    navSelector.classList.remove('main-nav--open');
  }
};

navButtonSelector.addEventListener ('click',onNavButtonSelectorClick);
