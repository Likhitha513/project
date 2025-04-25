
document.getElementById("teamList").innerHTML = `
  <li>Likhitha – Project Lead</li>
  <li>Sai Lakshmi – Emergency Analyst</li>
  <li>Rama Raju – Field Coordinator</li>
  <li>Arief – Technical Support</li>
`;

// Navigation logic (update URLs if needed)
function goBack() {
  window.location.href = "index.html"; // or set previous section/page
}

function goNext() {
  window.location.href = "alerts.html"; // or set next section/page
}
