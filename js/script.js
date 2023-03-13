{

    const calculateResult = (plnAmount, currency) => {
        const gramZlota = 258;
        const bitcoin = 98437.77;
        const akcjiOrlen = 65.64;

        switch (currency) {
            case "gramZlota":
                return plnAmount / gramZlota;

            case "bitcoin":
                return plnAmount / bitcoin;

            case "akcjiOrlen":
                return plnAmount / akcjiOrlen;
        }
    };

    const updateResultText = (plnAmount, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        if (result <= 0) { resultElement.innerText = "N/A" }
        else { resultElement.innerText = `${plnAmount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}` };
    }

    const onFormInput = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");

        const currencyElement = document.querySelector(".js-currency");

        const plnAmount = +plnElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(plnAmount, currency);

        updateResultText(plnAmount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);
    };

    init();

}