// ==========================================
// SCROLL REVEAL ANIMATION OBSERVER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with class 'reveal'
  const revealElements = document.querySelectorAll(".reveal");

  // Create an Intersection Observer
  const observerOptions = {
    root: null, // Viewport
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add 'active' class to trigger CSS transition
        entry.target.classList.add("active");
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Attach observer to each element
  revealElements.forEach((el) => {
    revealOnScroll.observe(el);
  });
});

const toggleBtn = document.getElementById("toggle-experience-btn");
const hiddenItems = document.querySelectorAll(".timeline-item.hidden-item");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isExpanding = toggleBtn.textContent.includes("More");

    hiddenItems.forEach((item) => {
      if (isExpanding) {
        item.classList.remove("hidden-item");
        item.classList.add("active");
      } else {
        item.classList.add("hidden-item");
      }
    });

    toggleBtn.textContent = isExpanding ? "Show Less" : "Show More";
  });
}

// Disable right-click menu
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable common Inspect Element shortcuts
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' || 
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
    (e.ctrlKey && e.key === 'u')
  ) {
    e.preventDefault();
  }
});

// Ambient Background Image Scroll Observer
const bgSections = document.querySelectorAll('.section');

const bgObserverOptions = {
  root: null,
  threshold: 0.35 // Triggers when ~35-40% of the section is visible in the viewport
};

const bgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bg-active');
    } else {
      // Fades the images out when scrolling away from the section
      entry.target.classList.remove('bg-active');
    }
  });
}, bgObserverOptions);

bgSections.forEach(section => {
  bgObserver.observe(section);
});