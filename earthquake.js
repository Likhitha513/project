document.addEventListener("DOMContentLoaded", () => {
  const tipsList = document.getElementById("tipsList");
  
  if (tipsList) {
    const tips = [
      {phase: "Before", text: "Secure heavy furniture and items on shelves to prevent falling."},
      {phase: "Before", text: "Create an emergency plan with meeting points and contacts."},
      {phase: "Before", text: "Prepare an emergency kit with food, water, and first aid supplies."},
      {phase: "During", text: "DROP to the ground, take COVER under sturdy furniture, and HOLD ON."},
      {phase: "During", text: "Stay away from windows, mirrors, and heavy objects that could fall."},
      {phase: "During", text: "If outdoors, move to an open area away from buildings and power lines."},
      {phase: "After", text: "Expect aftershocks and be ready to drop, cover, and hold on again."},
      {phase: "After", text: "Check for injuries and damage, but avoid using phones unless emergency."},
      {phase: "After", text: "Listen to official emergency broadcasts for updates and instructions."}
    ];

    tips.forEach(tip => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${tip.phase}:</strong> ${tip.text}`;
      tipsList.appendChild(li);
    });
  } else {
    console.error("Tips list element not found");
  }
});
