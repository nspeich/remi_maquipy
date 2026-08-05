// Données des 5 machines du catalogue
const TERRAPRO_MACHINES = [
  {
    id: "tw18",
    img: "photo_TW18.webp",
    pdf: "tw18.pdf",
    name: "TerraPro TW18",
    tagline: "Compacta, todo terreno",
    descr: "Miniexcavadora sobre orugas muy compacta, pensada para espacios reducidos: jardines, huertos, pequeños trabajos de movimiento de tierra.",
    specs: [
      { label: "Peso operativo", value: "1,8 t" },
      { label: "Potencia del motor", value: "10,4 – 18,8 kW" },
      { label: "Profundidad de excavación", value: "2,26 m" }
    ]
  },
  {
    id: "tw20",
    img: "photo_TW20.webp",
    pdf: "tw20.pdf",
    name: "TerraPro TW20",
    tagline: "Orugas, todoterreno",
    descr: "Miniexcavadora sobre orugas compacta para espacios estrechos, fiable y fácil de manejar.",
    specs: [
      { label: "Peso operativo", value: "2,0 t" },
      { label: "Potencia del motor", value: "11,8 – 18,1 kW" },
      { label: "Profundidad de excavación", value: "2,30 m" }
    ]
  },
  {
    id: "tw40",
    img: "photo_TW40.webp",
    pdf: "tw40.pdf",
    name: "TerraPro TW40",
    tagline: "Total confort",
    descr: "Miniexcavadora sobre orugas de 4 toneladas con brazo oscilante, cabina espaciosa climatizada y motor Kubota Euro 5.",
    specs: [
      { label: "Peso operativo", value: "3,8 t" },
      { label: "Potencia del motor", value: "18,2 kW" },
      { label: "Profundidad de excavación", value: "3,21 m" }
    ]
  },
  {
    id: "tws45",
    img: "photo_TWS45.webp",
    pdf: "tws45.pdf",
    name: "TerraPro TWS45",
    tagline: "Polivalente, compacta",
    descr: "Minicargadora polivalente, cabina ROPS/FOPS y amplia gama de accesorios compatibles.",
    specs: [
      { label: "Peso operativo", value: "3,0 t" },
      { label: "Potencia del motor", value: "50 hp" },
      { label: "Capacidad del cucharón", value: "0,4 – 0,5 m³" }
    ]
  },
  {
    id: "tws65",
    img: "photo_TWS65.webp",
    pdf: "tws65.pdf",
    name: "TerraPro TWS65",
    tagline: "Gran capacidad",
    descr: "Minicargadora más potente, motor Yanmar y cambio rápido de accesorios tipo Bobcat.",
    specs: [
      { label: "Peso operativo", value: "3,35 t" },
      { label: "Potencia del motor", value: "55 kW" },
      { label: "Capacidad del cucharón", value: "0,5 m³" }
    ]
  }
];

// Fonction pour construire le HTML d'une carte machine
function renderMachineCard(m) {
  return `
    <article class="card">
      <div class="card-header">
        <span>REF. ${m.id.toUpperCase()}</span>
        <span>${m.tagline}</span>
      </div>

      <!-- Chemin sans ../ car on est à la racine -->
      <img class="card-image" src="data/${m.img}" alt="${m.name}" loading="lazy" />

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
        <a href="data/${m.pdf}" target="_blank" rel="noopener" class="btn">
          Ficha técnica (PDF)
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
  
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// relier whatsapp

document.addEventListener("DOMContentLoaded", () => {
  const phoneNumber = "33665527052"; 
  const defaultMessage = "¡Hola! Me interesa obtener más información sobre el alquiler y venta de miniexcavadoras.";

  // Encoder le message pour l'URL
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Liens ayant l'attribut data-whatsapp-general
  const whatsappButtons = document.querySelectorAll("[data-whatsapp-general]");

  whatsappButtons.forEach(button => {
    button.href = whatsappUrl;
  });
});