document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Before: Prepare for Potential Risks.",
    "During: Monitor weather patterns.",
    "During: Monitor water usage and water levels in wells.",
    "After: Be cautious of water contamination and electric shocks.",
    "After: Assess the impact of drought on ecosystems."
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
