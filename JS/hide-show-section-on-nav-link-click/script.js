document.addEventListener('DOMContentLoaded', function () {
  // Get all navigation links and sections
  const navLinks = document.querySelectorAll('.navlink');
  const sections = document.querySelectorAll('section');

  // Hide all sections except the first one
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Add a click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Get the target section's ID from the link's href
      const targetId = link.getAttribute('href').substring(1);

      // Hide all sections
      sections.forEach((section) => {
        section.style.display = 'none';
      });

      // Display the target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });
});