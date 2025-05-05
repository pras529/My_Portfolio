// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Qualification tab switcher (replace this block in script.js)
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
});
// Certificates slider (horizontal scroll)
  const certTrack = document.getElementById('certificatesTrack');
  const certLeft = document.getElementById('certLeft');
  const certRight = document.getElementById('certRight');
  let scrollAmount = 0;
  const scrollStep = 270; // One card width + margin

  function scrollCertificates(direction) {
    if (!certTrack) return;
    const maxScroll = certTrack.scrollWidth - certTrack.clientWidth;
    if (direction === 'right') {
      scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
    } else {
      scrollAmount = Math.max(scrollAmount - scrollStep, 0);
    }
    certTrack.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  if (certLeft && certRight && certTrack) {
    certLeft.addEventListener('click', () => scrollCertificates('left'));
    certRight.addEventListener('click', () => scrollCertificates('right'));
  }

  // Optional: Drag-to-scroll for slider
  let isDragging = false, startX, scrollLeft;
  if(certTrack){
    certTrack.addEventListener('mousedown', (e) => {
      isDragging = true;
      certTrack.classList.add('dragging');
      startX = e.pageX - certTrack.offsetLeft;
      scrollLeft = certTrack.scrollLeft;
    });
    certTrack.addEventListener('mouseleave', () => {
      isDragging = false;
      certTrack.classList.remove('dragging');
    });
    certTrack.addEventListener('mouseup', () => {
      isDragging = false;
      certTrack.classList.remove('dragging');
    });
    certTrack.addEventListener('mousemove', (e) => {
      if(!isDragging) return;
      e.preventDefault();
      const x = e.pageX - certTrack.offsetLeft;
      const walk = (x - startX) * 1.3;
      certTrack.scrollLeft = scrollLeft - walk;
    });
  }

// Optional: Prevent form submit and show a simple message (for demo purposes)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been received.');
      form.reset();
    });
  }
});