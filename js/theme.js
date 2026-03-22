const body = document.body;
const themeBtn = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const heroImg = document.getElementById("hero-img");


let rootPath = location.pathname.includes("/pages/") ? "../" : "";


function updateHeroImage() {
  if (!heroImg) return;

  if (body.classList.contains("dark-theme")) {
    heroImg.src = rootPath + "img/pikejump-dark.jpg";
  } else {
    heroImg.src = rootPath + "img/pikejump.jpg";
  }
}


function loadTheme() {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    if (themeIcon) themeIcon.src = rootPath + "img/moon.png";
  } else {
    body.classList.remove("dark-theme");
    if (themeIcon) themeIcon.src = rootPath + "img/sun.png";
  }

  updateHeroImage();
}

loadTheme();


if (themeBtn) {
  themeBtn.addEventListener("click", (e) => {

    e.preventDefault();

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      if (themeIcon) themeIcon.src = rootPath + "img/moon.png";
    } else {
      localStorage.setItem("theme", "light");
      if (themeIcon) themeIcon.src = rootPath + "img/sun.png";
    }

    updateHeroImage();
  });
}

/*УВЕЛИЧЕНИЕ КАРТИНОК*/

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalContent');
  const modalClose = document.getElementById('imgModalClose');

  let currentScale = 1;

  document.querySelectorAll('.card-img img, .media-img img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      currentScale = 1;
      modalImg.style.transform = 'scale(1)';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  modalImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    currentScale += e.deltaY < 0 ? 0.1 : -0.1;
    currentScale = Math.min(Math.max(currentScale, 0.5), 3);
    modalImg.style.transform = `scale(${currentScale})`;
  });

});

/* КНОПКА НАВЕРХ */

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');

  if (!scrollBtn) return;


  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });


  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

/* SCROLL-ЭФФЕКТ */

document.addEventListener('scroll', () => {
  const hero = document.getElementById('scrollHero');
  if (!hero) return;

  const rect = hero.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.75;

  if (rect.top < triggerPoint) {
    hero.classList.add('active');
  }
}); 