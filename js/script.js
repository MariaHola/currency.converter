console.log("Allohaaaaaa! Dziękuję za sprawdzenie mojego wesołego kantorka:)");

let emptyElement = document.querySelector(".js-empty");
let formElement = document.querySelector(".js-form");

emptyElement.addEventListener("input", () => {
    console.log(`Aktualna wartość do przewalutowania: ${emptyElement.value}`);
});

formElement.addEventListener("reset", () => {
    console.log("Fromularz został zresetowany.");
});

let formElement = document.querySelector(".js-form");
let emptyElement = document.querySelector(".js-empty");
let currencyElement = document.querySelector(".js-currency");
let exchangeElement = document.querySelector(".js-exchange");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let empty = emptyElement.value;
    let currency = currencyElement.value;
    
    let exchange = empty / currency;
    exchangeElement.innerText = exchange.toFixed(2);
});




