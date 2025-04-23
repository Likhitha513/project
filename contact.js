document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("statusMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      status.style.color = "green";
      status.textContent = "✅ Your message has been sent successfully!";
      form.reset();
    } else {
      status.style.color = "red";
      status.textContent = "⚠️ Please fill out all fields.";
    }
  });
});
