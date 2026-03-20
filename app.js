function getTabela() {
  return new URLSearchParams(window.location.search).get("tabela");
}

// ================= INDEX =================
function renderIndex() {
  const managerSection = document.getElementById("managerSection");
  const analystsGrid = document.getElementById("analystsGrid");

  const gerenteGeral = {
    nome: "João Paulo",
    foto: "images/joaogerente.png",
    whatsapp: "558391071468",
    cargo: "Gerente Inteligência Comercial",
  };

  const analistaRotas = {
  nome: "Fabia",
  foto: "images/fabia.png",
  whatsapp: "558394448025",
  cargo: "Analista de Rotas",
};



  managerSection.innerHTML = `
  <div class="manager-grid">
    ${cardTemplate(gerenteGeral)}
    ${cardTemplate(analistaRotas)}
  </div>
`;

  analystsGrid.innerHTML = ANALISTAS.map(a =>
    cardTemplate(a, {
      mostrarGestao: true,
      tabela: a.tabela[0]
    })
  ).join("");
}

// ================= GESTÃO =================
function renderGestao() {
  const tabela = getTabela();
  const data = GESTAO[tabela];

  const manager = document.getElementById("managerSection");
  const supervisors = document.getElementById("supervisorsGrid");

  if (!data) {
    manager.innerHTML = `<p>Tabela não encontrada</p>`;
    return;
  }

  document.querySelector("h1").innerText = `Gestão da Tabela ${tabela}`;

  manager.innerHTML = `
    <div class="manager-card">
      ${cardTemplate(data.gerente)}
    </div>
  `;

  supervisors.innerHTML = data.supervisores
    .map(cardTemplate)
    .join("");
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("supervisorsGrid")) {
    renderGestao();
  } else {
    renderIndex();
  }
});