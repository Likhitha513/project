document.addEventListener("DOMContentLoaded", () => { const questions = document.querySelectorAll(".faq-question");

questions.forEach(button => { button.addEventListener("click", () => { const answer = button.nextElementSibling;
  // Toggle visibility
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    // Close all other answers
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    answer.style.display = "block";
  }
});
}); });