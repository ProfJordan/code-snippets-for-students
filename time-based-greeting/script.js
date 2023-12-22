document.addEventListener('DOMContentLoaded', function () {
        // Get the current hour of the day (0-23)
        const currentHour = new Date().getHours();

        // Get the greeting message based on the current hour
        let greetingMessage = '';

        if (currentHour >= 5 && currentHour < 12) {
            greetingMessage = 'Good Morning ☀️';
        } else if (currentHour >= 12 && currentHour < 18) {
            greetingMessage = 'Good Afternoon 🕛';
        } else {
            greetingMessage = 'Good Evening 🌙';
        }

        // Update the content of the h1 element with the greeting
        document.getElementById('greeting').textContent = greetingMessage;
    });