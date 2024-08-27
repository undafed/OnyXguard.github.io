// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();// Add this script to your JavaScript file or inside a <script> tag

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.about_section');

  const showSectionOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', showSectionOnScroll);
  showSectionOnScroll(); // Initial check
});
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
  
    fadeInElements.forEach(el => {
      observer.observe(el);
    });
  
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about_section, .service_section .box');
  
    const inView = (element) => {
      const rect = element.getBoundingClientRect();
      return (rect.top <= window.innerHeight && rect.bottom >= 0);
    };
  
    const handleScroll = () => {
      sections.forEach(section => {
        if (inView(section)) {
          section.classList.add('in-view');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll event to add the class on page load if already in view
  });
    