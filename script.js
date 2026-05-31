const typeText = "Software Engineering Intern | AI & Data Science";
const typeElement = document.getElementById('typewriter');
let typeIndex = 0;

function typeWriter() {
  if (typeIndex < typeText.length) {
    typeElement.innerHTML += typeText.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 60);
  } else {
    setTimeout(() => { typeElement.style.borderRight = "none"; }, 1000);
  }
}
setTimeout(typeWriter, 1000);

const particleLayer = document.getElementById('particle-layer');
function createParticles() {
  for (let i = 0; i < 35; i++) {
    let firefly = document.createElement('div');
    firefly.className = 'firefly';
    let size = Math.random() * 4 + 2;
    firefly.style.width = size + 'px';
    firefly.style.height = size + 'px';
    firefly.style.left = Math.random() * 100 + 'vw';
    firefly.style.top = Math.random() * 100 + 'vh';
    firefly.style.animationDuration = (Math.random() * 15 + 10) + 's, ' + (Math.random() * 3 + 2) + 's';
    firefly.style.animationDelay = (Math.random() * 5) + 's';
    particleLayer.appendChild(firefly);
  }
}
createParticles();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

function toggleRoot(element) {
  document.querySelectorAll('.root-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  element.classList.add('active');
}

function filterProjects(category) {
  document.querySelectorAll('.branch-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const projects = document.querySelectorAll('.project-leaf');
  projects.forEach(project => {
    project.style.transition = 'transform 0.4s, opacity 0.4s';
    if (category === 'all' || project.getAttribute('data-category') === category) {
      project.style.display = 'flex';
      setTimeout(() => { project.style.opacity = '1'; project.style.transform = 'scale(1)'; }, 50);
    } else {
      project.style.opacity = '0';
      project.style.transform = 'scale(0.8)';
      setTimeout(() => { project.style.display = 'none'; }, 400);
    }
  });
}

function openModal(title, desc) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-desc').innerText = desc;
  document.getElementById('main-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
  document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};