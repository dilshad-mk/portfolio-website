

const texts = [
  "full stack web developer",
  "MERN stack developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typewriter");
  const currentText = texts[textIndex];

  if (!isDeleting) {
    element.textContent = currentText.slice(0, charIndex++);
  } else {
    element.textContent = currentText.slice(0, charIndex--);
  }

  let speed = isDeleting ? 60 : 100;

  // Pause after full text typed
  if (charIndex === currentText.length + 1) {
    speed = 1200;
    isDeleting = true;
  }

  // Move to next text
  if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll(".scroll-animate").forEach(el => {
  observer.observe(el);
});
