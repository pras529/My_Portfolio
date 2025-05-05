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
document.addEventListener('DOMContentLoaded', () => {
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

  // Certificate Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.querySelector('.close-lightbox');

  document.querySelectorAll('.certificate-thumbnail').forEach(img => {
    img.addEventListener('click', function() {
      lightbox.style.display = "flex";
      lightboxImg.src = this.dataset.full || this.src;
      lightboxImg.alt = this.alt || "Full Certificate";
      document.body.style.overflow = "hidden";
    });
  });

  if (closeLightbox) {
    closeLightbox.onclick = function() {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      document.body.style.overflow = "";
    };
  }
  // Close modal when clicking outside image
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === this) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
        document.body.style.overflow = "";
      }
    });
  }

  // Contact form: Prevent default and show a thank you
  const form = document.querySelector('#contact form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been received.');
      form.reset();
    });
  }
});