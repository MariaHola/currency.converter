console.log("Allohaaaaaa! Dziękuję za sprawdzenie mojego wesołego kantorka:)");

let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let gramZlota = 258;
let bitcoin = 98437.77; 
let akcjiOrlen = 65.64;

formElement.addEventListener("input", () => {
    let plnAmount = +plnElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "gramZlota":
            result = plnAmount / gramZlota;
            break;
        case "bitcoin":
            result = plnAmount / bitcoin;
            break;
        case "akcjiOrlen":
            result = plnAmount / akcjiOrlen;
    }
    if (result <= 0) {resultElement.innerText = "N/A"}
    else { resultElement.innerText =`${plnAmount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`};
});




