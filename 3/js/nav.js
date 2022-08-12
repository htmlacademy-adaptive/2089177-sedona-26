const navigationSelector = document.querySelector('.main-nav');
const navigationButtonSelector = document.querySelector('.main-nav__toggle');

const onButtonSelectorClick = () =>{
  if (navigationSelector.classList.contains('main-nav--close')) {
    navigationSelector.classList.remove('main-nav--close');
    navigationSelector.classList.add('main-nav--open');
  } else {
    navigationSelector.classList.add('main-nav--close');
    navigationSelector.classList.remove('main-nav--open');
  }
};

navigationButtonSelector.addEventListener ('click',onButtonSelectorClick);
