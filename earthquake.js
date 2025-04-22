document.addEventListener("DOMContentLoaded", () => {
  const tipsList = document.getElementById("tipsList");

  const tips = [
    "Before: Secure heavy furniture and items on shelves.",
    "During: Drop, cover, and hold under a sturdy table.",
    "During: Stay away from windows and exterior walls.",
    "After: Be prepared for aftershocks and check for injuries.",
    "After: Do not use elevators and watch out for gas leaks."
  ];

  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});
