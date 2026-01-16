// Dados fictícios dos analistas
const analysts = [
  {
    nome: "Bruno Correia",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela A"]
  },
  {
    nome: "Bruno Correia",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela B"]
  },
  {
    nome: "Bruno Correia",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela C"]
  },

   {
    nome: "Bruno Correia",
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
    nome: "Bruno Correia",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Analista Comercial",
    tabela: ["Tabela F"]
  }
];

// Monta o grid com os cards
function renderAnalysts() {
  const grid = document.getElementById("analystsGrid");
  grid.innerHTML = analysts.map(a => cardTemplate(a)).join("");
}

// Template de card
function cardTemplate({ nome, foto, whatsapp, cargo, tabela }) {
  const waLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Olá ${nome}, gostaria de falar sobre uma proposta comercial.`
  )}`;

  return `
    <article class="card">
      <img class="card__image" src="${foto}" alt="Foto de ${nome}" />
      <div class="card__body">
        <h2 class="card__name">${nome}</h2>
        <p class="card__role">${cargo}</p>
        <div class="card__meta">
          ${tabela.map(r => `<span class="badge">${r}</span>`).join("")}
        </div>
        <div class="card__actions">
          <button class="btn btn--whatsapp" onclick="openWhatsApp('${waLink}')">
            Falar no WhatsApp
          </button>
          <button class="btn btn--outline" onclick="copyContact('${whatsapp}')">
            Copiar número
          </button>
        </div>
      </div>
    </article>
  `;
}

// Abre WhatsApp em nova aba
function openWhatsApp(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// Copia número para a área de transferência
function copyContact(number) {
  navigator.clipboard.writeText(number)
    .then(() => alert(`Número ${number} copiado!`))
    .catch(() => alert("Não foi possível copiar o número."));
}

// Inicializa
document.addEventListener("DOMContentLoaded", renderAnalysts);
