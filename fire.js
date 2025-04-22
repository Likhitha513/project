document.addEventListener("DOMContentLoaded", () => {
  const tips = [
  "Before: Install smoke detectors and keep extinguishers ready.",
  "During: Crawl low under smoke, cover nose with cloth.",
  "During: Use stairs, not elevators during evacuation.",
  "After: Do not re-enter burned areas until cleared.",
  "After: Seek medical attention for smoke inhalation."
];

  
const tipsList = document.getElementById("tipsList");
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});

