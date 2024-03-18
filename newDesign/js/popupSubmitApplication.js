let menuBtn = document.querySelector('.open_popup');
let popup = document.querySelector('.popup');
let crossBtn = document.querySelector('.popup__cross');

menuBtn.onclick = function () {
    popup.style.display = 'block';
}

crossBtn.onclick = function () {
    popup.style.display = 'none';
}

window.onclick =  function (event) {
    if (event.target === document.querySelector('.popup__body')) {
        popup.style.display = 'none';
    }
}