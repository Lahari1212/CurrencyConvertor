async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        let rate = data.rates[toCurrency]; // Get conversion rate

        if (rate) {
            let convertedAmount = (amount * rate).toFixed(2);
            document.getElementById("result").innerText = `${convertedAmount} ${toCurrency}`;
        } else {
            alert("Invalid currency selection.");
        }
    } catch (error) {
        alert("Error fetching conversion rate.");
        console.error(error);
    }
}
