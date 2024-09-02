// JavaScript to set the current year
document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});

// Function to toggle the mobile menu
function toggleMenu() {
  const hamburgerIcon = document.querySelector('.navbar-toggler');
  const menuLinks = document.querySelector('#navbarNav');

  // Toggle 'open' class on hamburger icon
  hamburgerIcon.classList.toggle('open');

  // Toggle 'show' class on menu links
  menuLinks.classList.toggle('show');
}

// Intersection Observer for fading in sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(50px)';
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

// Function to toggle between dark and light themes
function toggleTheme() {
  document.body.classList.toggle('dark-theme'); // Update to match your CSS class

  // Update the button text and icon based on the current theme
  const isDarkMode = document.body.classList.contains('dark-theme');
  const themeIcon = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  
  document.getElementById('theme-toggle').innerHTML = themeIcon;
  document.getElementById('theme-toggle-mobile').innerHTML = themeIcon;

  // Save the user's theme preference to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Load the theme preference from localStorage on page load
window.onload = function () {
  const theme = localStorage.getItem('theme');
  const isDarkMode = theme === 'dark';
  
  if (isDarkMode) {
    document.body.classList.add('dark-theme'); // Update to match your CSS class
  }
  
  const themeIcon = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  document.getElementById('theme-toggle').innerHTML = themeIcon;
  document.getElementById('theme-toggle-mobile').innerHTML = themeIcon;
}

// Function to trigger a CV download
function downloadCV() {
  const resumeURL = './assets/resume.pdf'; // Path to the resume PDF
  const link = document.createElement('a');

  link.href = resumeURL;
  link.setAttribute('download', 'resume.pdf');

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Adjust theme toggle button position based on screen size
function adjustThemeTogglePosition() {
  const button = document.getElementById('theme-toggle');
  const mobileButton = document.getElementById('theme-toggle-mobile');
  const navbarCollapse = document.querySelector('#navbarNav');

  if (window.innerWidth <= 768) {
    if (!mobileButton) {
      const mobileButtonElem = document.createElement('button');
      mobileButtonElem.id = 'theme-toggle-mobile';
      mobileButtonElem.className = 'btn btn-outline-secondary';
      mobileButtonElem.onclick = toggleTheme;
      mobileButtonElem.innerHTML = '<i class="fas fa-moon"></i>';
      navbarCollapse.prepend(mobileButtonElem);
    }
    button.style.display = 'none';
  } else {
    if (mobileButton) {
      mobileButton.remove();
    }
    button.style.display = 'block';
  }
}


// Handle resize event to adjust button position
window.addEventListener('resize', adjustThemeTogglePosition);
document.addEventListener('DOMContentLoaded', adjustThemeTogglePosition);
