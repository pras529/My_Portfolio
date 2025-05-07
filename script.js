// // Smooth scrolling for nav links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       e.preventDefault();
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });
// // // Falling Stars Animation (Dynamic Stars)
// // document.addEventListener('DOMContentLoaded', () => {
// //   const fallingStarsContainer = document.querySelector('.falling-stars');
// //   const createStar = () => {
// //     const star = document.createElement('div');
// //     star.className = 'star';
// //     star.style.left = `${Math.random() * 100}vw`;
// //     star.style.top = `${Math.random() * -50}px`;
// //     star.style.width = `${Math.random() * 2 + 1}px`;
// //     star.style.height = star.style.width;
// //     star.style.animationDuration = `${Math.random() * 20 + 10}s`; // Slower stars
// //     fallingStarsContainer.appendChild(star);
// //     setTimeout(() => star.remove(), 30000); // Ensure stars remove after animation
// //   };
// //
// //   setInterval(createStar, 1500);
// // });


// // Qualification tab switcher
// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelectorAll('.qualification-tabs .tab');
//   const educationTimeline = document.getElementById('education-timeline');
//   const workTimeline = document.getElementById('work-timeline');

//   tabs.forEach(tab => {
//     tab.addEventListener('click', function() {
//       tabs.forEach(t => t.classList.remove('active'));
//       this.classList.add('active');
//       if (this.dataset.tab === "education") {
//         educationTimeline.style.display = "flex";
//         workTimeline.style.display = "none";
//       } else {
//         educationTimeline.style.display = "none";
//         workTimeline.style.display = "flex";
//       }
//     });
//   });
// // Carousel Functionality
// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector(".carousel-track");
//   const slides = Array.from(track.children);
//   const nextButton = document.querySelector(".carousel-btn.next");
//   const prevButton = document.querySelector(".carousel-btn.prev");

//   const slideWidth = slides[0].getBoundingClientRect().width;

//   // Arrange slides next to one another
//   slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + "px";
//   });

//   const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = "translateX(-" + targetSlide.style.left + ")";
//     currentSlide.classList.remove("current-slide");
//     targetSlide.classList.add("current-slide");
//   };

//   // Initialize the first slide as the current slide
//   slides[0].classList.add("current-slide");

//   // Handle Next Button Click
//   nextButton.addEventListener("click", () => {
//     const currentSlide = track.querySelector(".current-slide");
//     const nextSlide = currentSlide.nextElementSibling || slides[0]; // Loop back to the first slide
//     moveToSlide(track, currentSlide, nextSlide);
//   });

//   // Handle Previous Button Click
//   prevButton.addEventListener("click", () => {
//     const currentSlide = track.querySelector(".current-slide");
//     const prevSlide =
//       currentSlide.previousElementSibling || slides[slides.length - 1]; // Loop back to the last slide
//     moveToSlide(track, currentSlide, prevSlide);
//   });

//   // Lightbox Functionality
//   const lightbox = document.getElementById("lightbox");
//   const lightboxImg = document.getElementById("lightbox-img");
//   const closeLightbox = document.querySelector(".close-lightbox");

//   document.querySelectorAll(".certificate-thumbnail").forEach((img) => {
//     img.addEventListener("click", function () {
//       lightbox.style.display = "flex";
//       lightboxImg.src = this.dataset.full || this.src;
//       lightboxImg.alt = this.alt || "Full Certificate";
//       document.body.style.overflow = "hidden";
//     });
//   });

//   closeLightbox.onclick = function () {
//     lightbox.style.display = "none";
//     lightboxImg.src = "";
//     document.body.style.overflow = "";
//   };

//   // Close modal on clicking outside the image
//   lightbox.addEventListener("click", function (e) {
//     if (e.target === this) {
//       lightbox.style.display = "none";
//       lightboxImg.src = "";
//       document.body.style.overflow = "";
//     }
//   });
// });
//   // Contact form: Prevent default and show a thank you
//   const form = document.querySelector('#contact form');
//   if(form){
//     form.addEventListener('submit', function(e){
//       e.preventDefault();
//       alert('Thank you for reaching out! Your message has been received.');
//       form.reset();
//     });
//   }

//   // Section scroll reveal animation
//   function revealSections() {
//     const sections = document.querySelectorAll('.section-animate');
//     const trigger = window.innerHeight * 0.90;
//     sections.forEach(section => {
//       const top = section.getBoundingClientRect().top;
//       if(top < trigger) section.classList.add('visible');
//     });
//   }
//   window.addEventListener('scroll', revealSections);
//   revealSections(); // Initial check
// });




document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Qualification tab switcher
  const tabs = document.querySelectorAll('.qualification-tabs .tab');
  const educationTimeline = document.getElementById('education-timeline');
  const workTimeline = document.getElementById('work-timeline');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      if (this.dataset.tab === "education") {
        educationTimeline.style.display = "flex";
        workTimeline.style.display = "none";
      } else {
        educationTimeline.style.display = "none";
        workTimeline.style.display = "flex";
      }
    });
  });

  // Carousel Functionality
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn.next");
  const prevButton = document.querySelector(".carousel-btn.prev");

  const slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  slides[0].classList.add("current-slide");

  nextButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(track, currentSlide, nextSlide);
  });

  prevButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(track, currentSlide, prevSlide);
  });





  



  // Lightbox Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".close-lightbox");

  document.querySelectorAll(".certificate-thumbnail").forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.dataset.full || this.src;
      lightboxImg.alt = this.alt || "Full Certificate";
      document.body.style.overflow = "hidden";
    });
  });

  closeLightbox.onclick = function () {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  lightbox.addEventListener("click", function (e) {
    if (e.target === this) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      document.body.style.overflow = "";
    }
  });

  // Contact form
  const form = document.querySelector('#contact form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been received.');
      form.reset();
    });
  }

  // Section scroll reveal animation
  function revealSections() {
    const sections = document.querySelectorAll('.section-animate');
    const trigger = window.innerHeight * 0.90;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if(top < trigger) section.classList.add('visible');
    });
  }
  window.addEventListener('scroll', revealSections);
  revealSections(); // Initial check
});
