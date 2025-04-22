document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Before: Determine if your area is prone to landslides.",
    "During: If possible,move away from the area.",
    "During: If evacuation is not possible,move to highest point in the area.",
    "After: Remain away from slide area.",
    "After: Landslide can sometimes cause  flooding, so be aware of it."
  ];

  const tipsList = document.getElementById("tipsList");
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});
