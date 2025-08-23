// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// ===== Skill Bar Animation =====
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
  skillLevels.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.querySelector('::after');
    skill.style.setProperty('--level-width', level + '%');
  });
}

// Trigger animation when skills section is in view
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    skillLevels.forEach(skill => {
      const level = skill.dataset.level;
      skill.querySelector(':after'); // Trigger CSS transition
      skill.style.setProperty('--level-width', level + '%');
    });
  }
}, { threshold: 0.5 });

observer.observe(skillsSection);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^=""]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Contact Form Placeholder (you can link to EmailJS or backend later) =====
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully! (This can be linked to EmailJS or backend service)');
});

// ===== Resume Download =====
const resumeBtn = document.createElement("a");
resumeBtn.href = "https://docs.google.com/document/d/1F1XYApKtR1dVUBXQEZIOI4SfqdbrkZC5/edit?usp=sharing&ouid=103625158280436167760&rtpof=true&sd=true";
resumeBtn.download = "Humphrey_Kimani_Resume.pdf";
resumeBtn.textContent = "Download Resume";
resumeBtn.className = "btn btn-secondary";
document.querySelector(".hero-buttons").appendChild(resumeBtn);
