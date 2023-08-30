var laercio = { 
  nome: "Laércio", 
  vitorias: 2, 
  empates: 1, 
  derrotas: 1, 
  pontos: 0 
};
var shirlene = {
  nome: "Shirlene",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};
var maria = { 
  nome: "Maria", 
  vitorias: 1, 
  empates: 1, 
  derrotas: 2, 
  pontos: 0 
};
var shirleide = {
  nome: "Shirleide",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};
var gabriel = {
  nome: "Gabriel",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};
var cristiano = { 
  nome: "Cristiano", 
  vitorias: 1, 
  empates: 1, 
  derrotas: 2, 
  pontos: 0 
};
var fulco = {
  nome: "Fulco",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

calculaPontos(laercio);
laercio.pontos = calculaPontos(laercio);
shirlene.pontos = calculaPontos(shirlene);
maria.pontos = calculaPontos(maria);
shirleide.pontos = calculaPontos(shirleide);
gabriel.pontos = calculaPontos(gabriel);
cristiano.pontos = calculaPontos(cristiano);
fulco.pontos = calculaPontos(fulco);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [laercio, shirlene, maria, shirleide, gabriel, cristiano, fulco];

console.log(jogadores);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<th>" + jogadores[i].derrotas + "</th>";
    elemento += "<th>" + jogadores[i].pontos + "</th>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
