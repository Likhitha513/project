document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Before: Elevate important items above potential flood levels.",
    "During: Avoid walking or driving through floodwaters.",
    "During: Move to higher ground immediately.",
    "After: Be cautious of water contamination and electric shocks.",
    "After: Listen to local authorities for updates."
  ];

  const tipsList = document.getElementById("tipsList");
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});
