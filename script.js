// 1️⃣ Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2️⃣ Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    // Only scroll for internal links
    if(link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// 3️⃣ Project Card Hover Effects
document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 0 20px #2b9cf9f1';
    card.style.transition = 'transform 0.3s, box-shadow 0.3s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 0 #000';
  });
});

// 4️⃣ Form Validation for Contact Form
const form = document.querySelector('.contact-right form');
if(form) {
  form.addEventListener('submit', e => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if(name.length < 2 || !email.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid name and email.');
    }
  });
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Animate welcome text on page load
window.addEventListener('DOMContentLoaded', () => {
  const welcomeElements = document.querySelectorAll('.welcome-text');
  welcomeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, index * 300); // stagger animation 300ms apart
  });
});

// Animate welcome text
window.addEventListener('DOMContentLoaded', () => {
  

  // Animate welcome text
  const welcomeElements = document.querySelectorAll('.welcome-text');
  welcomeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, index * 300); // stagger animation 300ms
  });
});

// Animate projects on scroll
const projects = document.querySelectorAll('.projects-container .project');

function revealProjects() {
  const triggerBottom = window.innerHeight * 0.85; // start revealing when 85% of viewport height

  projects.forEach((project, index) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      setTimeout(() => {
        project.classList.add('show'); // stagger animation
      }, index * 200); // delay 200ms between projects
    }
  });
}

// Trigger on scroll and on page load
window.addEventListener('scroll', revealProjects);
window.addEventListener('DOMContentLoaded', revealProjects);

