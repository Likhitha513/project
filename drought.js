document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Before: Prepare for Potential Risks.",
    "During: monitor weather patterns.",
    "During: Monitor water usage and water levels in wells.",
    "After: Be cautious of water contamination and electric shocks.",
    "After: Assess the impact of drought on ecosystems."
  ];

  const tipsList = document.getElementById("tipsList");
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});
