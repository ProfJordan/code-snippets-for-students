// URL of the API
let apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=25.0478&longitude=121.5319&current_weather=true';
let apiUrlF = 'https://api.open-meteo.com/v1/forecast?latitude=25.0478&longitude=121.5319&current_weather=true&temperature_unit=fahrenheit';

// Function to fetch and display the temperature
async function fetchAndDisplayTemperature() {
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response has the expected structure
        if (data && data.current_weather && data.current_weather.temperature) {
            const temperature = data.current_weather.temperature;
            console.log(`The current temperature is ${temperature}°C`);
            // You can also display it in an HTML element if needed
            // Example: 
          document.getElementById("temperatureDisplay").textContent = `${temperature}°C`;
        } else {
            console.error('Invalid API response structure');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and display the temperature
fetchAndDisplayTemperature();