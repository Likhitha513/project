document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Before: Stay informed about the disease and vaccines.",
    "During: Wear masks and practice social distancing.",
    "During: Wash hands frequently and avoid gatherings.",
    "After: Continue hygiene practices and monitor symptoms.",
    "After: Support recovery by staying updated and cautious."
  ];

  const tipsList = document.getElementById("tipsList");
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});
