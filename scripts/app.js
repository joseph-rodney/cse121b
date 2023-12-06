// API Key from Open Exchange Rates Website
const apiKey = "5bd04345dfd54b8ab251a9c268d49d7a";

// Get the HTML elements
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

// Fetch the latest exchanged rates data from the API
fetch(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}`)
        .then(function(response) {
            // Check if the response is ok
            if (response.ok) {
                // Return the response as JSON
                return response.json();
            } else {
                // Throw an error
                throw new Error('Something went wrong.');
            }
        })
        .then(function(data) {
            // Get the rates object from the data
            const rates = data.rates;

            // Loop through the rates object and populate the from currency dropdown
            Object.keys(rates).forEach(function(key) {
                // Create an option element
                const option = document.createElement('option');
                // Set the value and the text of the option element
                option.value = key;
                option.text = key;
                // Append the option element to the from currency select element
                fromCurrency.appendChild(option);
            });

            // Loop through the rates object and populate the to currency dropdown
            Object.keys(rates).forEach(function(key) {
                // Create an option element
                const option = document.createElement('option');
                // Set the value and the text of the option element
                option.value = key;
                option.text = key;
                // Append the option element to the to currency select element
                toCurrency.appendChild(option);
            });
        })
        .catch(function(error) {
            // Log the error
            console.error('Error fetching exchange rates data:', error);
        });

    // Add an event listener to the convert button
    convert.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        // Call the convert function
        convertCurrency();
    });

    // Define a function to convert the currency
    function convertCurrency() {
        // Get the input and the select values
        const amountValue = amount.value;
        const fromCurrencyValue = fromCurrency.value;
        const toCurrencyValue = toCurrency.value;

        // Check if the input is valid
        if (amountValue > 0) {
            // Fetch the latest exchange rates data from the API
            fetch(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}`)
                .then(function(response) {
                    // Check if the response is ok
                    if (response.ok) {
                        // Return the response as JSON
                        return response.json();
                    } else {
                        // Throw an error
                        throw new Error('Something went wrong.');
                    }
                })
                .then(function(data) {
                    // Get the rates object from the data
                    const rates = data.rates;

                    // Get the exchange rate for the from currency
                    const fromRate = rates[fromCurrencyValue];

                    // Get the exchange rate for the to currency
                    const toRate = rates[toCurrencyValue];

                    // Calculate the converted amount
                    const convertedAmount = (amountValue / fromRate) * toRate;

                    // Round the converted amount to two decimal places
                    const roundedAmount = convertedAmount.toFixed(2);

                    // Set the result paragraph text
                    result.textContent = `${amountValue} ${fromCurrencyValue} is equal to ${roundedAmount} ${toCurrencyValue}`;
                })
                .catch(function(error) {
                    // Log the error
                    console.error('Error fetching exchange rates data:', error);
                });
        } else {
            // Set the result paragraph text
            result.textContent = 'Please enter a valid amount.';
        }
    }
