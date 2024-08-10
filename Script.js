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
// Close the modal when clicking outside of it
document.addEventListener("click", function (event) {
  var modal = document.querySelector(".modal");
  if (modal.classList.contains("show")) {
    // Check if the modal is currently open
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  }
});
