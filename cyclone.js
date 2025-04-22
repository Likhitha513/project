document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Before: Secure loose objects and reinforce doors/windows.",
    "During: Stay indoors, away from windows.",
    "During: Keep emergency kit and radio handy.",
    "After: Avoid downed power lines and damaged buildings.",
    "After: Follow official instructions for evacuation or return."
  ];
  const tipsList = document.getElementById("tipsList");
  
  tips.forEach((tip, index) => {
    const li = document.createElement("li");
    li.textContent = tip;
    li.style.opacity = "0";
    li.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
    tipsList.appendChild(li);
  });
});
