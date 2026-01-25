

document.addEventListener('DOMContentLoaded', () => {
  const EMAILJS_SERVICE_ID = 'service_pdkrpek';
  const EMAILJS_TEMPLATE_ID = 'template_86f9egk';
  const EMAILJS_PUBLIC_KEY = 'UKtVGVh1yhk2Kd3J5';

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

  // const slideWidth = slides[0].getBoundingClientRect().width;
  // slides.forEach((slide, index) => {
  //   slide.style.left = slideWidth * index + "px";
  // });





  const setSlidePositions = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });
  
    // Optional: re-adjust carousel to current slide after resize
    const currentSlide = track.querySelector(".current-slide");
    track.style.transform = "translateX(-" + currentSlide.style.left + ")";
  };
  
  window.addEventListener("resize", setSlidePositions);
  setSlidePositions(); // Initial setup


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


  if (window.emailjs && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!window.emailjs) {
        alert('Email service not loaded. Please check your network.');
        return;
      }

      if (
        EMAILJS_SERVICE_ID.startsWith('YOUR_') ||
        EMAILJS_TEMPLATE_ID.startsWith('YOUR_') ||
        EMAILJS_PUBLIC_KEY.startsWith('YOUR_')
      ) {
        alert('Please configure EmailJS service, template, and public key.');
        return;
      }

      const userName = form.querySelector('input[name="user_name"]').value.trim();
      const userEmail = form.querySelector('input[name="user_email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          user_name: userName,
          user_email: userEmail,
          message
        });
        alert('Message sent! I will get back to you soon.');
        form.reset();
      } catch (err) {
        console.error('EmailJS error:', err);
        alert('Failed to send. Please try again later.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }

  // Section scroll reveal animation
  function revealSections() {
    const sections = document.querySelectorAll('.section-animate');
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if(top < trigger) section.classList.add('visible');
    });
  }
  window.addEventListener('scroll', revealSections);
  revealSections(); // Initial check
});