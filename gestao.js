// Dados de gestão: 1 gerente + 3 supervisores por tabela
const gestaoPorTabela = {
  A: {
    gerente: { nome: "Ariusca", foto: "gestao1.jpeg", whatsapp: "5583988888888", cargo: "Gerente Comercial", tabela: ["Tabela A"] },
    supervisores: [
      { nome: "Supervisor1", foto: "gestao2.jpeg", whatsapp: "5583977777777", cargo: "Supervisor Comercial", tabela: ["Tabela A"] },
      { nome: "supervisor2", foto: "gestao3.jpeg", whatsapp: "5583966666666", cargo: "Supervisor Comercial", tabela: ["Tabela A"] },
      { nome: "supervisor3", foto: "gestao4.jpeg", whatsapp: "5583955555555", cargo: "Supervisor Comercial", tabela: ["Tabela A"] },
    ]
  },
  B: {
    gerente: { nome: "Antonio", foto: "gestao5.jpeg", whatsapp: "5583944444444", cargo: "Gerente Comercial", tabela: ["Tabela B"] },
    supervisores: [
      { nome: "supervisor1", foto: "gestao6.jpeg", whatsapp: "5583933333333", cargo: "Supervisor Comercial", tabela: ["Tabela B"] },
      { nome: "supervisor2", foto: "gestao7.jpeg", whatsapp: "5583922222222", cargo: "Supervisor Comercial", tabela: ["Tabela B"] },
      { nome: "supervisor3", foto: "gestao8.jpeg", whatsapp: "5583911111111", cargo: "Supervisor Comercial", tabela: ["Tabela B"] },
    ]
  },
  C: {
    gerente: { nome: "Tulio", foto: "gestao9.jpeg", whatsapp: "5583900000000", cargo: "Gerente Comercial", tabela: ["Tabela C"] },
    supervisores: [
      { nome: "supersor1", foto: "gestao10.jpeg", whatsapp: "5583899999999", cargo: "Supervisor Comercial", tabela: ["Tabela C"] },
      { nome: "supervisor2", foto: "gestao11.jpeg", whatsapp: "5583898888888", cargo: "Supervisor Comercial", tabela: ["Tabela C"] },
      { nome: "supervisor3", foto: "gestao12.jpeg", whatsapp: "5583897777777", cargo: "Supervisor Comercial", tabela: ["Tabela C"] },
    ]
  },
  D: {
    gerente: { nome: "Salezio", foto: "gestao13.jpeg", whatsapp: "5583896666666", cargo: "Gerente Comercial", tabela: ["Tabela D"] },
    supervisores: [
      { nome: "supervisor1", foto: "gestao14.jpeg", whatsapp: "5583895555555", cargo: "Supervisor Comercial", tabela: ["Tabela D"] },
      { nome: "supervisor2", foto: "gestao15.jpeg", whatsapp: "5583894444444", cargo: "Supervisor Comercial", tabela: ["Tabela D"] },
      { nome: "supervisor3", foto: "gestao16.jpeg", whatsapp: "5583893333333", cargo: "Supervisor Comercial", tabela: ["Tabela D"] },
    ]
  },
  E: {
    gerente: { nome: "Sandra", foto: "gestao17.jpeg", whatsapp: "5583892222222", cargo: "Gerente Comercial", tabela: ["Tabela E"] },
    supervisores: [
      { nome: "supervisor1", foto: "gestao18.jpeg", whatsapp: "5583891111111", cargo: "Supervisor Comercial", tabela: ["Tabela E"] },
      { nome: "supervisor2", foto: "gestao19.jpeg", whatsapp: "5583890000000", cargo: "Supervisor Comercial", tabela: ["Tabela E"] },
      { nome: "supervisor3", foto: "gestao20.jpeg", whatsapp: "5583889999999", cargo: "Supervisor Comercial", tabela: ["Tabela E"] },
    ]
  },
  F: {
    gerente: { nome: "Aline", foto: "gestao21.jpeg", whatsapp: "5583888888888", cargo: "Gerente Comercial", tabela: ["Tabela F"] },
    supervisores: [
      { nome: "supervisor1", foto: "gestao22.jpeg", whatsapp: "5583887777777", cargo: "Supervisor Comercial", tabela: ["Tabela F"] },
      { nome: "supervisor2", foto: "gestao23.jpeg", whatsapp: "5583886666666", cargo: "Supervisor Comercial", tabela: ["Tabela F"] },
      { nome: "supervisor3", foto: "gestao24.jpeg", whatsapp: "5583885555555", cargo: "Supervisor Comercial", tabela: ["Tabela F"] },
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
