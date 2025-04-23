document.addEventListener("DOMContentLoaded", () => {
  const fireSafetyTips = [
    {
      phase: "Prevention",
      text: "Install smoke alarms on every level of your home and test them monthly."
    },
    {
      phase: "Prevention",
      text: "Keep flammable materials away from heat sources and never leave cooking unattended."
    },
    {
      phase: "Prevention", 
      text: "Have fire extinguishers readily available and know how to use them (PASS method)."
    },
    {
      phase: "Prevention",
      text: "Create and practice a home fire escape plan with two ways out of every room."
    },
    {
      phase: "During",
      text: "If a fire starts, get out immediately and stay out. Never go back inside."
    },
    {
      phase: "During",
      text: "Crawl low under smoke to your exit - cleaner air will be near the floor."
    },
    {
      phase: "During",
      text: "If trapped, close doors and cover vents/cracks with cloth to keep smoke out."
    },
    {
      phase: "During",
      text: "If your clothes catch fire: STOP (don't run), DROP to the ground, and ROLL."
    },
    {
      phase: "After",
      text: "Once safe, call emergency services. Give your exact location and details."
    },
    {
      phase: "After",
      text: "Seek medical attention for burns or smoke inhalation, even if minor."
    },
    {
      phase: "After",
      text: "Do not re-enter the building until firefighters declare it safe."
    },
    {
      phase: "After",
      text: "Contact your insurance company and document all damage with photos."
    }
  ];

  const tipsContainer = document.getElementById("tipsContainer");
  
  // Clear any existing content
  tipsContainer.innerHTML = '';
  
  // Create and append cards for each tip
  fireSafetyTips.forEach(tip => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.setAttribute("data-phase", tip.phase);
    
    const phaseElement = document.createElement("div");
    phaseElement.className = "tip-phase";
    phaseElement.textContent = tip.phase;
    
    const textElement = document.createElement("div");
    textElement.className = "tip-text";
    textElement.textContent = tip.text;
    
    card.appendChild(phaseElement);
    card.appendChild(textElement);
    tipsContainer.appendChild(card);
  });

  // Update the page title and header
  document.title = "Fire Safety Tips";
  const header = document.querySelector("header h1");
  if (header) {
    header.textContent = "Fire Safety & Prevention";
  }
  
  // Update the section title
  const sectionTitle = document.querySelector(".info h2");
  if (sectionTitle) {
    sectionTitle.textContent = "Fire Safety Guidelines";
  }
});
