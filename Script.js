// Add any additional JavaScript functionality here
// For example, you could add smooth scrolling or form validation

document.addEventListener("DOMContentLoaded", function () {
  // Example: Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
