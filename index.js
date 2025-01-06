// Add this script inside the <body> tag or in an external JS file.

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('#menu-button');
  const navbar = document.querySelector('#navbar');
  
  // Toggle the menu when the button is clicked
  menuButton.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
});
