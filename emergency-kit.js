document.addEventListener("DOMContentLoaded", () => { const items = [ "Water (at least 3 liters per person)", "Non-perishable food", "First aid kit", "Flashlight with extra batteries", "Whistle", "Face masks", "Local maps", "Medications", "Multipurpose tool", "Important documents (copies)", "Mobile phone + charger", "Cash", "Emergency blanket" ];

const list = document.getElementById("kitList");

items.forEach(item => { const li = document.createElement("li"); li.className = "kit-item";
const checkbox = document.createElement("input");
checkbox.type = "checkbox";

const label = document.createElement("label");
label.textContent = item;

checkbox.addEventListener("change", () => {
  li.classList.toggle("checked", checkbox.checked);
});

li.appendChild(checkbox);
li.appendChild(label);
list.appendChild(li);
}); });