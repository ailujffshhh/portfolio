document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            navLinks.forEach(function (link) {
                link.classList.add('scrolled');
            });
        } else {
            navbar.classList.remove('scrolled');
            navLinks.forEach(function (link) {
                link.classList.remove('scrolled');
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all links with the class "navlink"
    var links = document.querySelectorAll(".navlink");

    // Add a click event listener to each link
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Get the target section ID from the href attribute
        var targetId = link.getAttribute("href").substring(1);

        // Scroll to the target section with smooth behavior
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  // script.js

  // Your other JavaScript code...

document.addEventListener('DOMContentLoaded', function () {
    const text = ['Full Stack Developer', 'Front End Developer', 'Back End Developer'];
    const typingSpeed = 100; // Adjust the speed as needed
    const erasingSpeed = 50; // Adjust the speed as needed
    const delayBetweenPhrases = 3000; // Adjust the delay between phrases as needed
  
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentText = text[textIndex];
      const typingEffect = document.getElementById('typingEffect');
  
      if (isDeleting) {
        typingEffect.innerHTML = currentText.slice(0, charIndex - 1);
        charIndex--;
      } else {
        typingEffect.innerHTML = currentText.slice(0, charIndex + 1);
        charIndex++;
      }
  
      if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(() => {
          type();
        }, delayBetweenPhrases);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % text.length;
        setTimeout(() => {
          type();
        }, 500);
      } else {
        setTimeout(() => {
          type();
        }, isDeleting ? erasingSpeed : typingSpeed);
      }
    }
  
    if (text.length) {
      setTimeout(() => {
        type();
      }, delayBetweenPhrases);
    }
  });
  
