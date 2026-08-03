// Données des 5 machines du catalogue
const TERRAPRO_MACHINES = [
  {
    id: "tw18",
    img: "tw18.jpg",
    pdf: "tw18.pdf",
    name: "TerraPro TW18",
    tagline: "Compacte, passe-partout",
    descr: "Mini-pelle sur chenilles très compacte, pensée pour les espaces réduits : jardins, vergers, petits travaux de terrassement.",
    specs: [
      { label: "Poids opérationnel", value: "1,8 t" },
      { label: "Puissance moteur", value: "10,4 – 18,8 kW" },
      { label: "Profondeur de fouille", value: "2,26 m" }
    ]
  },
  {
    id: "tw20",
    img: "tw20.jpg",
    pdf: "tw20.pdf",
    name: "TerraPro TW20",
    tagline: "Chenilles, tout-terrain",
    descr: "Mini-pelle sur chenilles compacte pour espaces étroits, fiable et simple à prendre en main.",
    specs: [
      { label: "Poids opérationnel", value: "2,0 t" },
      { label: "Puissance moteur", value: "11,8 – 18,1 kW" },
      { label: "Profondeur de fouille", value: "2,30 m" }
    ]
  },
  {
    id: "tw40",
    img: "tw40.jpg",
    pdf: "tw40.pdf",
    name: "TerraPro TW40",
    tagline: "Grand format, tout confort",
    descr: "Mini-pelle sur chenilles 4 tonnes à bras oscillant, cabine spacieuse climatisée et moteur Kubota Euro 5.",
    specs: [
      { label: "Poids opérationnel", value: "3,8 t" },
      { label: "Puissance moteur", value: "18,2 kW" },
      { label: "Profondeur de fouille", value: "3,21 m" }
    ]
  },
  {
    id: "tws45",
    img: "tws45.jpg",
    pdf: "tws45.pdf",
    name: "TerraPro TWS45",
    tagline: "Polyvalente, compacte",
    descr: "Chargeuse compacte polyvalente, cabine ROPS/FOPS et large gamme d'accessoires compatibles.",
    specs: [
      { label: "Poids opérationnel", value: "3,0 t" },
      { label: "Puissance moteur", value: "50 ch" },
      { label: "Capacité godet", value: "0,4 – 0,5 m³" }
    ]
  },
  {
    id: "tws65",
    img: "tws65.jpg",
    pdf: "tws65.pdf",
    name: "TerraPro TWS65",
    tagline: "Polyvalente, grande capacité",
    descr: "Chargeuse compacte plus puissante, moteur Yanmar et changement d'accessoire rapide type Bobcat.",
    specs: [
      { label: "Poids opérationnel", value: "3,35 t" },
      { label: "Puissance moteur", value: "55 kW" },
      { label: "Capacité godet", value: "0,5 m³" }
    ]
  }
];

// Fonction pour construire le HTML d'une carte machine
// (utilise les classes .card / .card-header / .card-image / .card-body /
//  .specs / .spec / .card-footer réellement définies dans style.css)
function renderMachineCard(m) {
  return `
    <article class="card">
      <div class="card-header">
        <span>RÉF. ${m.id.toUpperCase()}</span>
        <span>${m.tagline}</span>
      </div>

      <img class="card-image" src="../data/${m.img}" alt="${m.name}" loading="lazy" />

      <div class="card-body">
        <h2>${m.name}</h2>
        <p class="description">${m.descr}</p>

        <div class="specs">
          ${m.specs.map((s) => `
          <div class="spec">
            <small>${s.label}</small>
            <strong>${s.value}</strong>
          </div>`).join("")}
        </div>
      </div>

      <div class="card-footer card-footer--single">
        <a href="../data/${m.pdf}" target="_blank" rel="noopener" class="btn">
          Fiche technique (PDF)
        </a>
      </div>
    </article>`;
}

// Fonction pour injecter les cartes dans la grille du catalogue
function renderCatalogue() {
  const grid = document.getElementById("catalogue-grid");
  if (!grid) return;
  grid.innerHTML = TERRAPRO_MACHINES.map(renderMachineCard).join("");
}

// Exécution au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderCatalogue();
  
  // Mise à jour dynamique de l'année dans le footer si l'élément existe
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

