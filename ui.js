function gerarLinkWhatsApp(nome, telefone) {
  return `https://web.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(
    `Olá ${nome}, gostaria de falar sobre uma proposta comercial.`
  )}`;
}

function cardTemplate(pessoa, options = {}) {
  const { mostrarGestao = false, tabela = null } = options;
  const waLink = gerarLinkWhatsApp(pessoa.nome, pessoa.whatsapp);

  return `
    <article class="card">
      <img class="card__image" src="${pessoa.foto}" alt="Foto de ${pessoa.nome}">
      
      <div class="card__body">
        <h2 class="card__name">${pessoa.nome}</h2>
        <p class="card__role">${pessoa.cargo}</p>

        ${pessoa.tabela?.length ? `
          <div class="card__meta">
            ${pessoa.tabela.map(t => `<span class="badge">Tabela ${t}</span>`).join("")}
          </div>
        ` : ""}

        <div class="card__actions">
          <button class="btn btn--whatsapp" onclick="window.open('${waLink}', '_blank')">
            WhatsApp
          </button>

          <button class="btn btn--outline" onclick="navigator.clipboard.writeText('${pessoa.whatsapp}')">
            Copiar
          </button>

          ${mostrarGestao ? `
            <a href="gestao.html?tabela=${tabela}" class="btn btn--secondary">
              Gestão
            </a>
          ` : ""}
        </div>
      </div>
    </article>
  `;
}