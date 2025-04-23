document.addEventListener("DOMContentLoaded", () => {
  const tipsList = document.getElementById("tipsList");
  
  if (tipsList) {
    const tips = [
      "Before: Secure heavy furniture and items on shelves.",
      "Before: Create an emergency plan with your family.",
      "Before: Prepare an emergency kit with supplies.",
      "During: Drop, cover, and hold under a sturdy table.",
      "During: Stay away from windows and exterior walls.",
      "During: If outdoors, move to an open area away from buildings.",
      "After: Be prepared for aftershocks and check for injuries.",
      "After: Do not use elevators and watch out for gas leaks.",
      "After: Listen to official information sources for updates."
    ];

    tips.forEach(tip => {
      const li = document.createElement("li");
      li.textContent = tip;
      tipsList.appendChild(li);
    });
  } else {
    console.error("Tips list element not found");
  }
});
