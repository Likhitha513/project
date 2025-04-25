document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("volunteerForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const skills = document.getElementById("skills").value.trim();

    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    confirmationMessage.textContent = `Thank you for signing up, ${name}! We will get in touch with you soon.`;
    form.reset();
  });

  // Next and Back buttons
  document.getElementById("nextButton").addEventListener("click", () => {
    alert("Next button clicked! (Add navigation logic here)");
  });

  document.getElementById("backButton").addEventListener("click", () => {
    alert("Back button clicked! (Add navigation logic here)");
  });
});
