// card 

const cardNumber = document.querySelector('#card-show');
const cardName = document.querySelector('#card-name');
const cardMonth = document.querySelector('#monthexp');
const cardYear = document.querySelector('#yearexp');
const cardCVV = document.querySelector('#cvv-view');

const cardNameInput = document.querySelector('#cardName');
const cardNumberInput = document.querySelector('#cardNumber');
const cardExpMonthInput = document.querySelector('#month');
const cardExpYearInput = document.querySelector('#year');
const cardCVVInput = document.querySelector('#cvv');

cardNameInput.addEventListener('input', (e) => {
    cardName.textContent = e.target.value;
});

cardNumberInput.addEventListener('input', (e) => {
    let cardNum = e.target.value;
    cardNum = cardNum.replace(/\D/g, '');
    cardNum = cardNum.replace(/(.{4})/g, '$1 ');
    cardNumber.textContent = cardNum.trim();
});

cardExpMonthInput.addEventListener('input', (e) => {
    let cardMon = e.target.value;
    cardMon = cardMon.replace(/\D/g, '');
    cardMon = cardMon.replace(/(.{3})/g, '')
    cardMonth.textContent = cardMon.trim();
});

cardExpYearInput.addEventListener('input', (e) => {
    let cardYr = e.target.value;
    cardYr = cardYr.replace(/\D/g, '');
    cardYr = cardYr.replace(/(.{5})/g, '')
    cardYear.textContent = cardYr.trim();
});


cardCVVInput.addEventListener('input', (e) => {
    let cardCvv = e.target.value;
    cardCvv = cardCvv.replace(/\D/g, '');
    cardCvv = cardCvv.replace(/(.{4})/g, '')
    cardCVV.textContent = cardCvv.trim();
});
