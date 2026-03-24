console.log("script.js loaded!");

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

// Scroll to top functionality
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  // Show/hide button
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Launch animation + scroll
  scrollBtn.addEventListener("click", () => {
    console.log("Rocket launched!");
    scrollBtn.classList.add("launch");

    // After animation, scroll to top and reset rocket
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      scrollBtn.classList.remove("launch");
    }, 600); // matches CSS transition duration
  });
});

// ===== Typing Effect (Build Once, Keep All) =====
const phrases = [
  "Tech Enthusiast",
  "Passionate Analyst",
  "Web Designer",
  "Certified Data Engineer"
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
}

loop();



items.forEach(item => {
  timelineObserver.observe(item);
});

//footer quote animation
const quotes = [
  "Every dataset tells a story.",
  "Dream in code, act in impact.",
  "Learning is my lifelong project.",
  "Exploration fuels innovation."
];

function showRandomQuote() {
  const container = document.getElementById("quote-container");
  const quote = document.createElement("div");
  quote.className = "quote";
  quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Restrict to top-left and top-right corners
  const positions = [
    { top: "10px", left: "10px" },   // top-left
    { top: "10px", right: "10px" }   // top-right
  ];
  const pos = positions[Math.floor(Math.random() * positions.length)];
  Object.assign(quote.style, pos);

  container.appendChild(quote);

  // Remove after animation
  setTimeout(() => {
    if (container.contains(quote)) {
      container.removeChild(quote);
    }
  }, 6000);
}

// Show a new quote every 8 seconds
setInterval(showRandomQuote, 8000);

