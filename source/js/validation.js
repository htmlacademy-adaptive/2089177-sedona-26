const MAX_SYMBOLS = 15;
const MAX_COMMENTLENGTH = 120;
const RE = /[^A-Za-zА-Яа-яЁё]/g;

let inputTelephoneElement = document.querySelectorAll("#contact-telephone");
let formElement = document.querySelectorAll(".form__container");
let feedbackDescriptionElement = document.querySelector("#feedback-description");

const errorMessage = {
  COMMENT_TEXT: `Поле не должно содержать символов,пробелов, цифр и быть длинне ${MAX_SYMBOLS} символов`,
  FEEDBACK_TEXT_DESC: `Поле не должно быть длинне ${MAX_COMMENTLENGTH} символов`,
};

const onFeedbackDescriptionElementinput = () => {
  if (feedbackDescriptionElement) {
    feedbackDescriptionElement.addEventListener("input", () => {
      feedbackDescriptionElement.setCustomValidity("");
      let inputCommentText = feedbackDescriptionElement.value;
      if (inputCommentText.length > MAX_COMMENTLENGTH) {
        feedbackDescriptionElement.setCustomValidity(`${errorMessage.FEEDBACK_TEXT_DESC}`);
      }
    });
  }
  return;
};

const onUserFioElementInput = () => {
  formElement.forEach((formContainer) => {
    let inputNameElement = formContainer.querySelector(
      ".form__input--login-user"
    );
    if (inputNameElement) {
      inputNameElement.addEventListener("input", () => {
        inputNameElement.setCustomValidity("");
        let inputCommentText = inputNameElement.value;
        if (
          inputCommentText.length > MAX_SYMBOLS ||
          inputCommentText.match(RE)
        ) {
          inputNameElement.setCustomValidity(`${errorMessage.COMMENT_TEXT}`);
        }
      });
    }
    return;
  });
};

const onTelephoneNumberElementClick = () => {
  [].forEach.call(inputTelephoneElement, (input) => {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, (a) => {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }
      let reg = matrix
        .slice(0, this.value.length)
        .replace(/_+/g, (a) => {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = newValue;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
};

window.addEventListener("DOMContentLoaded", onTelephoneNumberElementClick);

onUserFioElementInput();
onFeedbackDescriptionElementinput();
