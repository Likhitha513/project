document.addEventListener("DOMContentLoaded", () => {
  const alertsContainer = document.getElementById("alerts-container");

  const sampleAlerts = [
    {
      title: "Cyclone Warning",
      location: "Coastal Andhra Pradesh",
      severity: "High",
      time: "2025-04-18 16:30",
      description: "Cyclone Remal expected to make landfall. Evacuation underway."
    },
    {
      title: "Heatwave Alert",
      location: "Delhi NCR",
      severity: "Moderate",
      time: "2025-04-18 14:00",
      description: "Temperatures rising to 46°C. Avoid outdoor activity during peak hours."
    }
  ];

  sampleAlerts.forEach(alert => {
    const alertCard = document.createElement("div");
    alertCard.className = "alert-card";

    alertCard.innerHTML = `
      <h3>${alert.title}</h3>
      <p><strong>Location:</strong> ${alert.location}</p>
      <p><strong>Severity:</strong> ${alert.severity}</p>
      <p><strong>Time:</strong> ${alert.time}</p>
      <p>${alert.description}</p>
    `;

    alertsContainer.appendChild(alertCard);
  });
});

// Navigation functions
function goBack() {
  window.location.href = "about.html";
}

function goNext() {
  window.location.href = "contact.html";
}
