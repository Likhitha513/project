document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("disaster-grid");

  const disasters = [
    { title: "Earthquake", file: "earthquake.html", color: "#e63946" },
    { title: "Flood", file: "flood.html", color: "#457b9d" },
    { title: "Cyclone", file: "cyclone.html", color: "#2a9d8f" },
    { title: "Drought", file: "drought.html", color: "#e9c46a" },
    { title: "Fire", file: "fire.html", color: "#f4a261" },
    { title: "Landslide", file: "landslide.html", color: "#a8dadc" },
    { title: "Pandemic", file: "pandemic.html", color: "#6a4c93" }
  ];

  disasters.forEach(d => {
    const card = document.createElement("div");
    card.className = "disaster-card";
    card.style.borderLeftColor = d.color;
    card.innerHTML = `<h3>${d.title}</h3><p>Learn how to prepare and respond to ${d.title.toLowerCase()}s.</p>`;
    card.addEventListener("click", () => {
      window.location.href = d.file;
    });
    grid.appendChild(card);
  });
});
