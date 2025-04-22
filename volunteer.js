document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("volunteerForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;

    // Form validation (simple checks)
    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission (real-world applications would send data to a server)
    confirmationMessage.textContent = `Thank you for signing up, ${name}! We will get in touch with you soon.`;
    form.reset(); // Reset form after submission
  });
});
