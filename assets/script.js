document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

        let currentIndex = 1;     const slidesToShow = window.innerWidth < 768 ? 1 : 3;     const slideWidth = slides[0].clientWidth;

        const firstClone = slides.slice(0, slidesToShow).map(slide => slide.cloneNode(true));
    const lastClone = slides.slice(-slidesToShow).map(slide => slide.cloneNode(true));

        firstClone.forEach(clone => slider.appendChild(clone));
    lastClone.forEach(clone => slider.insertBefore(clone, slides[0]));

        const allSlides = Array.from(slider.children);
    const totalSlides = allSlides.length;

        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        function updateSlider() {
      slider.style.transition = "transform 0.3s ease-in-out";
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

        prevBtn.addEventListener("click", () => {
      currentIndex--;
      updateSlider();

            if (currentIndex < slidesToShow) {
        setTimeout(() => {
          slider.style.transition = "none";           currentIndex = totalSlides - slidesToShow * 2 - 1;           slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 300);       }
    });

    nextBtn.addEventListener("click", () => {
      currentIndex++;
      updateSlider();

            if (currentIndex >= totalSlides - slidesToShow) {
        setTimeout(() => {
          slider.style.transition = "none";           currentIndex = slidesToShow;           slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 300);       }
    });

        window.addEventListener("resize", () => {
      location.reload();     });
  });

  const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (hamburger.classList.contains('active')) {
    hamburger.innerHTML = '✖';
  } else {
    hamburger.innerHTML = `
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    `;
  }
});
