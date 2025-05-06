document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      // Toggle current answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        // Hide all other answers
        document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
        answer.style.display = "block";
      }
    });
  });
});

// Back button functionality
function goBack() {
  window.history.back(); // Or use: window.location.href = "resources.html";
}

// Next button functionality
function goNext() {
  window.location.href = "contact.html"; // Update this if your next page differs
}
