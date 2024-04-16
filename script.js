document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('ul li a');
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
  
        const href = link.getAttribute('href');
  
        if (href === '#') {
          return;
        }
  
        // Add the 'out' class to the body
        document.body.classList.add('out');
  
        // Load the new page
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  });