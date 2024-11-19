const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

navToggle.addEventListener('click', () => {
  // Toggle the "active" class for dropdown
  const isActive = navLinks.classList.toggle('active');

  if (isActive) {
    // Add staggered animations for each link
    navItems.forEach((item, index) => {
      item.style.animation = `fadeIn 0.3s ease-in-out ${index * 0.1}s forwards`;
    });
  } else {
    // Reset animations on close
    navItems.forEach(item => {
      item.style.animation = 'none';
    });
  }
});


// Dynamic Typing Effect
const dynamicText = document.getElementById("dynamic-text");
const phrases = ["a Programmer", "a Designer", "an IT Specialist"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  if (isDeleting) {
    dynamicText.textContent = phrases[i].slice(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  } else {
    dynamicText.textContent = phrases[i].slice(0, j++);
    if (j > phrases[i].length) {
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, isDeleting ? 100 : 200);
}
typeEffect();

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openModal(projectId) {
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modal-details");

  if (projectId === 1) {
    modalDetails.innerHTML = `
      <h3>Social Media App</h3>
      <p>This web application allows users to connect, share posts, and interact in real-time.</p>
    `;
  } else if (projectId === 2) {
    modalDetails.innerHTML = `
      <h3>Portfolio Website</h3>
      <p>A personal website to showcase my skills, work, and projects, designed using modern web technologies.</p>
    `;
  } else if (projectId === 3) {
    modalDetails.innerHTML = `
      <h3>E-commerce Website</h3>
      <p>This is an online store built with React for the frontend and Node.js for the backend, with payment integration.</p>
    `;
  } else if (projectId === 4) {
    modalDetails.innerHTML = `
      <h3>Task Manager App</h3>
      <p>A productivity app for managing tasks using React for the frontend and Firebase for real-time data synchronization.</p>
    `;
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}