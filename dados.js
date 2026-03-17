// ================= CONSTANTE =================
const WHATSAPP_PADRAO = "5583991108967";

// Função para criar pessoa
function criarPessoa(nome, foto, cargo, tabela = [], whatsapp = WHATSAPP_PADRAO) {
  return { nome, foto, cargo, tabela, whatsapp };
}

// ================= ANALISTAS =================
const ANALISTAS = [
  criarPessoa("Elaine", "elaine.png", "Analista Comercial", ["A"], "558393359259"),
  criarPessoa("Kayo", "kayo.png", "Analista Comercial", ["B"], "558391298870"),
  criarPessoa("Carol", "carol.png", "Analista Comercial", ["C"], "558393383401"),
  criarPessoa("Elaine", "elaine.png", "Analista Comercial", ["D"], "558391095813"),
  criarPessoa("Bruno", "bruno.png", "Analista Comercial", ["E"], "558391108967"),
  criarPessoa("Maria Rita", "rita.png", "Analista Comercial", ["F"], "558391124193"),
];

// ================= GESTÃO =================
const GESTAO = {
  A: {
    gerente: criarPessoa("Ariusca", "gestao1.jpeg", "Gerente Comercial", ["A"], "5583922222222"),
    supervisores: [
      criarPessoa("Argus Jp", "gestao2.jpeg", "Supervisor Comercial", ["A"], "5583911111111"),
      criarPessoa("Adriel CG", "gestao3.jpeg", "Supervisor Comercial", ["A"], "5583900000000"),
      criarPessoa("Kleber ST", "gestao4.jpeg", "Supervisor Comercial", ["A"], "5583899999999"),
    ]
  },
  B: {
    gerente: criarPessoa("sem gerente", "gestao5.jpeg", "Gerente Comercial", ["B"], "5583898888888"),
    supervisores: [
      criarPessoa("Emilia JP", "gestao6.jpeg", "Supervisor Comercial", ["B"], "5583897777777"),
      criarPessoa("Alexandre CG", "gestao7.jpeg", "Supervisor Comercial", ["B"], "5583896666666"),
      criarPessoa("Nataniel ST", "gestao8.jpeg", "Supervisor Comercial", ["B"], "5583895555555"),
      criarPessoa("Leonardo", "gestao8.jpeg", "Coordenador Comercial", ["B"], "5583895555555"),
    ]
  },
  C: {
    gerente: criarPessoa("Tulio", "gestao9.jpeg", "Gerente Comercial", ["C"], "5583894444444"),
    supervisores: [
      criarPessoa("Aline Fernanda Flex", "gestao10.jpeg", "Supervisor Comercial", ["C"], "5583893333333"),
      criarPessoa("Erica JPP", "gestao11.jpeg", "Supervisor Comercial", ["C"], "5583892222222"),
      criarPessoa("Marcio jp", "gestao12.jpeg", "Supervisor Comercial", ["C"], "5583891111111"),
      criarPessoa("Daniella CG", "gestao12.jpeg", "Supervisor Comercial", ["C"], "5583891111111"),
      criarPessoa("Eurysmar ST1", "gestao12.jpeg", "Supervisor Comercial", ["C"], "5583891111111"),
      criarPessoa("Kley St2", "gestao12.jpeg", "Supervisor Comercial", ["C"], "5583891111111"),
    ]
  },
  D: {
    gerente: criarPessoa("Salezio", "gestao13.jpeg", "Gerente Comercial", ["D"], "5583888888888"),
    supervisores: [
      criarPessoa("Denis JP", "gestao14.jpeg", "Supervisor Comercial", ["D"], "5583887777777"),
      criarPessoa("Idarliane CG", "gestao15.jpeg", "Supervisor Comercial", ["D"], "5583886666666"),
      criarPessoa("Almivan ST", "gestao16.jpeg", "Supervisor Comercial", ["D"], "5583885555555"),
    ]
  },
  E: {
    gerente: criarPessoa("Sandra", "gestao17.jpeg", "Gerente Comercial", ["E"], "5583884444444"),
    supervisores: [
      criarPessoa("Marcos Paulo", "gestao18.jpeg", "Supervisor Comercial", ["E"], "5583883333333"),
      criarPessoa("Pedro", "gestao19.jpeg", "Supervisor Comercial", ["E"], "5583882222222"),
      criarPessoa("Natan", "gestao20.jpeg", "Supervisor Comercial", ["E"], "5583881111111"),
    ]
  },
  F: {
    gerente: criarPessoa("Aline", "gestao21.jpeg", "Gerente Comercial", ["F"], "5583877777777"),
    supervisores: [
      criarPessoa("Bruna JP", "gestao22.jpeg", "Supervisor Comercial", ["F"], "5583876666666"),
      criarPessoa("Marciel CG", "gestao23.jpeg", "Supervisor Comercial", ["F"], "5583875555555"),
      criarPessoa("Emanuel ST", "gestao24.jpeg", "Supervisor Comercial", ["F"], "5583874444444"),
      criarPessoa("Yngrid", "gestao24.jpeg", "Coordenador Comercial", ["F"], "5583874444444"),
    ]
  }
};