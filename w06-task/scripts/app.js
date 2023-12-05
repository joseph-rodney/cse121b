const apiKey = 'ET2tDo9RwXEpkuQSgVurXxQR2OalrLHr'; // Replace with your CurrencyBeacon API key
const apiUrl = 'https://currencybeacon.com/api/v1/';

// Fetch currency data and populate dropdowns
async function fetchCurrencyData() {
    try {
        const response = await fetch(`${apiUrl}currencies?api_key=${apiKey}`);
        const data = await response.json();

        console.log('API Response:', data); // Log the response for inspection

        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');

        // Check if the response is an object with numerical keys
        if (typeof data === 'object' && !Array.isArray(data)) {
            // Convert the object values to an array
            const currencies = Object.values(data);

            // Populate dropdowns with currency options
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                option1.value = currency.code;
                option1.text = `${currency.name} (${currency.code})`;
                fromCurrencySelect.add(option1);

                const option2 = document.createElement('option');
                option2.value = currency.code;
                option2.text = `${currency.name} (${currency.code})`;
                toCurrencySelect.add(option2);
            });
        } else {
            console.error('Invalid response format. Expected an object with numerical keys.');
        }
    } catch (error) {
        console.error('Error fetching currency data:', error);
    }
}


// Convert currency
async function convertCurrency() {
    try {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;

        const response = await fetch(`${apiUrl}convert?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
        
        // Check if the response status is OK (200)
        if (response.ok) {
            const data = await response.text(); // Use response.text() instead of response.json()
            const resultElement = document.getElementById('result');
            resultElement.textContent = `${amount} ${fromCurrency} is equal to ${data} ${toCurrency}`;
        } else {
            // Handle non-OK (error) responses
            const errorData = await response.text(); // Use response.text() instead of response.json()
            console.error('Error converting currency:', errorData);

            // Display a user-friendly error message
            const resultElement = document.getElementById('result');
            resultElement.textContent = 'An error occurred during conversion. Please try again later.';
        }
    } catch (error) {
        console.error('Error converting currency:', error);

        // Display a user-friendly error message
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'An unexpected error occurred. Please try again later.!'; 
    }
}


// Load currency data when the page loads
window.onload = function () {
    fetchCurrencyData();
};
