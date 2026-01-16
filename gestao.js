// Dados de gestão: 1 gerente + 3 supervisores por tabela
const gestaoPorTabela = {
  A: {
    gerente: { nome: "João Paulo", foto: "gestao1.jpeg", whatsapp: "5583988888888", cargo: "Gerente Comercial", tabela: ["Tabela A"] },
    supervisores: [
      { nome: "Sandra", foto: "gestao2.jpeg", whatsapp: "5583977777777", cargo: "Supervisor Comercial", tabela: ["Tabela A"] },
      { nome: "Marcos", foto: "gestao3.jpeg", whatsapp: "5583966666666", cargo: "Supervisor Comercial", tabela: ["Tabela A"] },
      { nome: "Paula", foto: "gestao4.jpeg", whatsapp: "5583955555555", cargo: "Supervisor Comercial", tabela: ["Tabela A"] },
    ]
  },
  B: {
    gerente: { nome: "Fernanda Costa", foto: "gestao5.jpeg", whatsapp: "5583944444444", cargo: "Gerente Comercial", tabela: ["Tabela B"] },
    supervisores: [
      { nome: "João Pedro", foto: "gestao6.jpeg", whatsapp: "5583933333333", cargo: "Supervisor Comercial", tabela: ["Tabela B"] },
      { nome: "Larissa Melo", foto: "gestao7.jpeg", whatsapp: "5583922222222", cargo: "Supervisor Comercial", tabela: ["Tabela B"] },
      { nome: "Daniel Nunes", foto: "gestao8.jpeg", whatsapp: "5583911111111", cargo: "Supervisor Comercial", tabela: ["Tabela B"] },
    ]
  },
  C: {
    gerente: { nome: "Paula Rodrigues", foto: "gestao9.jpeg", whatsapp: "5583900000000", cargo: "Gerente Comercial", tabela: ["Tabela C"] },
    supervisores: [
      { nome: "Carla Mendes", foto: "gestao10.jpeg", whatsapp: "5583899999999", cargo: "Supervisor Comercial", tabela: ["Tabela C"] },
      { nome: "Fábio Lima", foto: "gestao11.jpeg", whatsapp: "5583898888888", cargo: "Supervisor Comercial", tabela: ["Tabela C"] },
      { nome: "Renata Souza", foto: "gestao12.jpeg", whatsapp: "5583897777777", cargo: "Supervisor Comercial", tabela: ["Tabela C"] },
    ]
  },
  D: {
    gerente: { nome: "Everton Silva", foto: "gestao13.jpeg", whatsapp: "5583896666666", cargo: "Gerente Comercial", tabela: ["Tabela D"] },
    supervisores: [
      { nome: "Bruno Costa", foto: "gestao14.jpeg", whatsapp: "5583895555555", cargo: "Supervisor Comercial", tabela: ["Tabela D"] },
      { nome: "Mariana Lima", foto: "gestao15.jpeg", whatsapp: "5583894444444", cargo: "Supervisor Comercial", tabela: ["Tabela D"] },
      { nome: "Gustavo Rocha", foto: "gestao16.jpeg", whatsapp: "5583893333333", cargo: "Supervisor Comercial", tabela: ["Tabela D"] },
    ]
  },
  E: {
    gerente: { nome: "Bruno Correia", foto: "gestao17.jpeg", whatsapp: "5583892222222", cargo: "Gerente Comercial", tabela: ["Tabela E"] },
    supervisores: [
      { nome: "Tatiane Melo", foto: "gestao18.jpeg", whatsapp: "5583891111111", cargo: "Supervisor Comercial", tabela: ["Tabela E"] },
      { nome: "Carlos Nunes", foto: "gestao19.jpeg", whatsapp: "5583890000000", cargo: "Supervisor Comercial", tabela: ["Tabela E"] },
      { nome: "Larissa Fernandes", foto: "gestao20.jpeg", whatsapp: "5583889999999", cargo: "Supervisor Comercial", tabela: ["Tabela E"] },
    ]
  },
  F: {
    gerente: { nome: "Maria Rita", foto: "gestao21.jpeg", whatsapp: "5583888888888", cargo: "Gerente Comercial", tabela: ["Tabela F"] },
    supervisores: [
      { nome: "Everthon Lima", foto: "gestao22.jpeg", whatsapp: "5583887777777", cargo: "Supervisor Comercial", tabela: ["Tabela F"] },
      { nome: "Kayo Rocha", foto: "gestao23.jpeg", whatsapp: "5583886666666", cargo: "Supervisor Comercial", tabela: ["Tabela F"] },
      { nome: "Carol Mendes", foto: "gestao24.jpeg", whatsapp: "5583885555555", cargo: "Supervisor Comercial", tabela: ["Tabela F"] },
    ]
  }
};

// Pega a tabela da URL
function getTabelaFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tabela");
}

// Template do card
function cardTemplate({ nome, foto, whatsapp, cargo, tabela }) {
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
          <button class="btn btn--whatsapp" onclick="window.open('${waLink}', '_blank')">
            Falar no WhatsApp
          </button>
          <button class="btn btn--outline" onclick="navigator.clipboard.writeText('${whatsapp}')">
            Copiar número
          </button>
        </div>
      </div>
    </article>
  `;
}

// Renderiza a página de gestão
function renderManagement() {
  const tabela = getTabelaFromURL();
  const gridManager = document.getElementById("managerSection");
  const gridSupervisors = document.getElementById("supervisorsGrid");

  if (!tabela || !gestaoPorTabela[tabela]) {
    gridManager.innerHTML = `<p>Tabela "${tabela}" não encontrada.</p>`;
    gridSupervisors.innerHTML = "";
    return;
  }

  // Atualiza título
  document.querySelector("h1").innerText = `Gestão da Tabela ${tabela}`;

  // Renderiza gerente
  gridManager.innerHTML = `<div class="manager-card">${cardTemplate(gestaoPorTabela[tabela].gerente)}</div>`;

  // Renderiza supervisores
  gridSupervisors.innerHTML = gestaoPorTabela[tabela].supervisores.map(cardTemplate).join("");
}

// Inicializa
document.addEventListener("DOMContentLoaded", renderManagement);
