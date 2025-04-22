document.addEventListener("DOMContentLoaded", () => {
  const tips = [
  "Before: Secure loose objects and reinforce doors/windows.",
  "During: Stay indoors, away from windows.",
  "During: Keep emergency kit and radio handy.",
  "After: Avoid downed power lines and damaged buildings.",
  "After: Follow official instructions for evacuation or return."
];
const tipsList = document.getElementById("tipsList");
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});

