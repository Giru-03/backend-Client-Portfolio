const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const textsToType = ["Data Scientist. ","Digital Marketer. ","AI/ML Engineer. ","Programmer. "];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

function type() {
  const typingElement = document.querySelector('.heading');
  typingElement.textContent += textsToType[textIndex][charIndex];

  charIndex++;

  if (charIndex < textsToType[textIndex].length) {
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingSpeed * 3);
  }
}

function erase() {
  const typingElement = document.querySelector('.heading');
  const currentText = textsToType[textIndex];
  
  if (typingElement.textContent.length > 0) {
    
    typingElement.textContent = currentText.substring(0, typingElement.textContent.length - 1);
    setTimeout(erase, typingSpeed);
  } else {
    
    textIndex = (textIndex + 1) % textsToType.length;
    charIndex = 0;
    setTimeout(type, typingSpeed / 2);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, typingSpeed);
});
