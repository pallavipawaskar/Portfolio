// ===== Modal Functionality =====

// Open modal by ID
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

// Close modal by ID
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside modal content
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// ===== Smooth Scrolling =====

// ===== Smooth Scrolling =====
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Active Link Highlight =====
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
// Smooth scroll for hero button
const heroBtn = document.querySelector('.hero .btn');
if (heroBtn) {
  heroBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// ===== Hover Effects =====

// Add hover animation to skills
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.transition = 'transform 0.3s ease';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
  });
});


// ===== Scroll-to-Top Rocket =====
const scrollBtn = document.querySelector('.scroll-top');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Fun Easter Egg: Console Message =====
console.log("%cCuriosity is the compass; persistence is the engine.", 
            "color:#00b294; font-size:16px; font-weight:bold;");
console.log("%cHello Recruiter 👋 Pallavi is a passionate explorer of tech, ambitious and stubborn in pursuit of mastery!", 
            "color:#0078d7; font-size:14px;");

// ===== Scroll Animations =====
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));

// ===== Typing Effect (Build Once, Keep All) =====
const phrases = [
  "Tech Enthusiast",
  "Passionate Analyst",
  "Web Designer",
  "Certified Data Engineer",
  "AI Explorer",
  "Cloud Learner (AWS)"
];

let i = 0; // phrase index
let j = 0; // letter index
let currentLine = "";

function loop() {
  const typingElement = document.getElementById('typing');
  typingElement.innerHTML = currentLine;

  if (i < phrases.length) {
    if (j < phrases[i].length) {
      // type letters of current phrase
      currentLine += phrases[i][j];
      j++;
    } else {
      // phrase finished, add separator and move to next
      if (i < phrases.length - 1) {
        currentLine += " | ";
      }
      i++;
      j = 0;
    }
    setTimeout(loop, 120); // typing speed
  }
  // once all phrases are typed, stop — keep full line
}

loop();

// ===== Scroll-to-Top Button =====
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

