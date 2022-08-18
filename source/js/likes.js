
const onLikeButtonClick = () => {
const likesSelector = document.querySelectorAll('.likes');
const render = (counter, likeValueSelector) => likeValueSelector.innerText = counter;
likesSelector.forEach(likes => {
  const likeButtonSelector = likes.querySelector ('.likes__button');
  const likeValueSelector = likes.querySelector('.likes__description');

  let counter = likeValueSelector.textContent;
  likeButtonSelector.addEventListener('click', () => {
    if(likeButtonSelector.classList.contains('likes__button--click')){
      render(--counter, likeValueSelector);
    }else{
      render(++counter, likeValueSelector);
    }
    likeButtonSelector.classList.toggle('likes__button--click');
  });
})
};

onLikeButtonClick();

