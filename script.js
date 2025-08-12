// Typing effect for a single line
function typeText(elementId, text, speed = 80) {
  const el = document.getElementById(elementId);
  let index = 0;
  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Typing effect for paragraphs
function typeParagraphs(paragraphs, speed = 15) {
  let current = 0;
  let charIndex = 0;
  function typeNextChar() {
    if (current >= paragraphs.length) return;
    const { id, text } = paragraphs[current];
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`Element with ID "${id}" not found.`);
      current++;
      typeNextChar();
      return;
    }
    if (charIndex < text.length) {
      el.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, speed);
    } else {
      current++;
      charIndex = 0;
      setTimeout(typeNextChar, 300);
    }
  }
  typeNextChar();
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  // Lightbox functionality for gallery
  if (currentPage.includes("gallery.html")) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const images = document.querySelectorAll('.lightbox-img');

    if (lightbox && lightboxImg && closeBtn && images.length > 0) {
      images.forEach(img => {
        img.addEventListener('click', () => {
          lightbox.style.display = 'flex';
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          document.body.style.overflow = 'hidden';
        });
      });
      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
          lightbox.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  }
  

  // Typing effect on about.html
  if (currentPage.includes("about.html")) {
    typeText("typed-text", "About Me", 100);
    const paragraphs = [
      {
        id: "para1",
        text: "Hello! I'm Wanjiku Ann , a passionate artist who brings emotions to life through charcoal and digital art.Most of my work flows with music, I draw what I hear and feel .Each piece is an expression of the sounds ,moods and stories I experience while listening."
      },
      {id:"para2",
        text: "Art is more than a hobby to me ,its my way of connecting with the world and expressing what words sometimes cant. I love capturing stories, emotions, and moments that speak to heart."
      },
      {
        id: "para3",
        text: "When I'm not drawing, I enjoy learning web development,writing poetry, playing guitar, and creating new artistic experiences online."
      },
      {
        id: "para4",
        text: "This website is not only my portfolio, but also a place where I combine my two worlds: art and technology.Welcome to my artistic Journey!"
      }
    ];
    typeParagraphs(paragraphs); 
  }

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu") || document.querySelector("nav ul");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
