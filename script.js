// ================= GERENTE =================
const manager = {
  nome: "João Paulo",
  foto: "imageb.jpeg",
  whatsapp: "5583991108967",
  cargo: "Gerente Comercial",
  tabela: ["Todas as Tabelas"]
};


// Dados fictícios dos analistas
const analysts = [
  {
    nome: "Tayran",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela A"]
  },
  {
    nome: "Kayo",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela B"]
  },
  {
    nome: "Carol",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela C"]
  },

   {
    nome: "Everthon",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela D"]
  },

    {
    nome: "Bruno Correia",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela E"]
  },

  {
    nome: "Maria Rita",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela F"]
  }
];

// ================= RENDERIZAÇÃO =================
function renderManager() {
  const section = document.getElementById("managerSection");
  section.innerHTML = `
    <div class="manager-card">
      ${cardTemplate(manager, false)}
    </div>
  `;
}

function renderAnalysts() {
  const grid = document.getElementById("analystsGrid");
  grid.innerHTML = analysts.map(a => cardTemplate(a, true)).join("");
}


// ================= TEMPLATE =================
function cardTemplate({ nome, foto, whatsapp, cargo, tabela }, isAnalyst = false) {
  const waLink = `https://web.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(
    `Olá ${nome}, gostaria de falar sobre uma proposta comercial.`
  )}`;

  return `
    <article class="card">
      <img class="card__image" src="${foto}" alt="Foto de ${nome}">
      <div class="card__body">
        <h2 class="card__name">${nome}</h2>
        <p class="card__role">${cargo}</p>

        <div class="card__meta">
          ${tabela.map(t => `<span class="badge">${t}</span>`).join("")}
        </div>

        <div class="card__actions">
          <button class="btn btn--whatsapp" onclick="openWhatsApp('${waLink}')">
            Falar no WhatsApp
          </button>

          <button class="btn btn--outline" onclick="copyContact('${whatsapp}')">
            Copiar número
          </button>

          ${
            isAnalyst
              ? `<a href="gestao.html" class="btn btn--secondary">Gestão da Tabela</a>`
              : ``
          }
        </div>
      </div>
    </article>
  `;
}


// ================= AÇÕES =================
function openWhatsApp(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function copyContact(number) {
  navigator.clipboard.writeText(number)
    .then(() => alert(`Número ${number} copiado!`))
    .catch(() => alert("Não foi possível copiar o número."));
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  renderManager();
  renderAnalysts();
});

function renderManager() {
  const section = document.getElementById("managerSection");
  section.innerHTML = cardTemplate(manager, false);
}

function renderSupervisors() {
  const grid = document.getElementById("supervisorsGrid");
  grid.innerHTML = supervisors.map(s => cardTemplate(s, false)).join("");
}
