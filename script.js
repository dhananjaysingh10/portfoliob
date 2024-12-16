const typed = new Typed('.multiple-text', {
    strings: ['Technophile.', 'Web Developer.', 'Competitive Programmer.', 'Learner.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});


// Select the timeline element
const timeline = document.querySelector('.timeline');

// Set a flag to check if the animation has already been triggered
let isTimelineAnimated = false;

// Function to check if the timeline is in the viewport
function isTimelineInViewport() {
  const rect = timeline.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to trigger the timeline animation
function animateTimeline() {
  // Select all the rishi elements inside the timeline
  const rishis = document.querySelectorAll('.timeline .rishi');

  // Add the animation class to each rishi element with a delay
  rishis.forEach((rishi, index) => {
    rishi.classList.add('animated');
    rishi.style.animationDelay = `${index * 2}s`;
  });

  // Set the flag to true
  isTimelineAnimated = true;
}

// Function to handle the scroll event
function handleScroll() {
  // Check if the timeline is in the viewport and the animation hasn't been triggered yet
  if (isTimelineInViewport() && !isTimelineAnimated) {
    // Trigger the animation
    animateTimeline();
  }
}

// Add an event listener to the window object to handle the scroll event
window.addEventListener('scroll', handleScroll);
