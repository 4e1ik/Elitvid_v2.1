let menuBtnCall = document.querySelector('.call');
let popupCall = document.querySelector('.popup_call');
let crossBtnCall = document.querySelector('.popup__cross_call');

menuBtnCall.onclick = function () {
    popupCall.style.display = 'block';
};

crossBtnCall.onclick = function () {
    popupCall.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target === document.querySelector('.popup__body_call')) {
        popupCall.style.display = 'none';
    }
};