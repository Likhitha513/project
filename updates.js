document.addEventListener("DOMContentLoaded", () => {
  // Add new update dynamically
  const newUpdatesSection = document.getElementById("newUpdatesSection");

  const newUpdate = `
    <div class="update" id="update3">
      <h3>Disaster Preparedness Training for Volunteers</h3>
      <p>Join our upcoming disaster preparedness training to be fully prepared for emergency situations.</p>
      <span class="update-date">Published: 2025-04-17</span>
    </div>
  `;
  
  newUpdatesSection.innerHTML = newUpdate;
});
