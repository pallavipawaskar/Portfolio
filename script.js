// Open modal
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hero button scroll
document.querySelector('.hero .btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
});