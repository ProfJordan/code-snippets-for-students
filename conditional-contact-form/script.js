// script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactTypeSelect = document.getElementById('contact-type');
    const addressField = document.getElementById('address-field');
    const emailField = document.getElementById('email-field');

    contactTypeSelect.addEventListener('change', function() {
        if (contactTypeSelect.value === 'address') {
            addressField.classList.remove('hidden');
            emailField.classList.add('hidden');
        } else if (contactTypeSelect.value === 'email') {
            emailField.classList.remove('hidden');
            addressField.classList.add('hidden');
        }
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form submission logic here
        alert('Form submitted!');
    });
});