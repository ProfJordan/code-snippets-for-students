let isCelsius = true;

// Function to swap temperature unit
async function swapTemperatureUnit() {
    try {
        let apiUrl = isCelsius ? 'https://api.open-meteo.com/v1/forecast?latitude=25.0478&longitude=121.5319&current_weather=true' : 'https://api.open-meteo.com/v1/forecast?latitude=25.0478&longitude=121.5319&current_weather=true&temperature_unit=fahrenheit';
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.current_weather && data.current_weather.temperature) {
            const temperature = data.current_weather.temperature;
            console.log(`The current temperature is ${temperature}°${isCelsius ? 'C' : 'F'}`);
            document.getElementById("temperatureDisplay").textContent = `${temperature}°${isCelsius ? 'C' : 'F'}`;
        } else {
            console.error('Invalid API response structure');
        }

        // Swap the flag to fetch the other unit next time
        isCelsius = !isCelsius;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to fetch and display the temperature
async function fetchAndDisplayTemperature() {
    await swapTemperatureUnit();
}

// Add a click event listener to the button
document.getElementById("unitSwapButton").addEventListener("click", swapTemperatureUnit);

// Call the function to fetch and display the temperature
fetchAndDisplayTemperature();