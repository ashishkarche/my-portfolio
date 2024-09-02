document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.querySelector('.loader').classList.add('hidden');
        // Allow scrolling once the loader is hidden
        document.body.style.overflow = 'auto';
      }, 4000); // Adjust this time if needed
    });

    // Prevent scrolling while loader is active
    document.body.style.overflow = 'hidden';
  });

  document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the value as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  