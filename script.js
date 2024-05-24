function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  // Toggle 'open' class on hamburger icon
  hamburgerIcon.classList.toggle('open');

  // Toggle 'open' class on menu links
  menuLinks.classList.toggle('open');
}

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
      }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

function toggleTheme() {
  document.body.classList.toggle('dark-mode');

  // Update the button text
  const isDarkMode = document.body.classList.contains('dark-mode');
  document.getElementById('theme-toggle').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  document.getElementById('theme-toggle-mobile').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

  // Save theme preference to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Load theme preference from localStorage
window.onload = function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').textContent = 'Light Mode';
    document.getElementById('theme-toggle-mobile').textContent = 'Light Mode';
  } else {
    document.getElementById('theme-toggle').textContent = 'Dark Mode';
    document.getElementById('theme-toggle-mobile').textContent = 'Dark Mode';
  }
}
function downloadCV() {
  // Replace 'path_to_resume.pdf' with the actual path to your PDF file
  const resumeURL = './assets/resume.pdf'; 
  const link = document.createElement('a');
  link.href = resumeURL;
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

