//Saldo inicial e produtos
const produtos = [

  //Águas
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },
  { name: "Água", numero: 1, preço: 1, quantidade: 10, imagem: "agua.jpg" },

  //Tisanas
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },
  { name: "Tisana", numero: 2, preço: 1.20, quantidade: 10, imagem: "tisana.jpg" },

  //Refrigerantes
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },
  { name: "Refrigerante", numero: 3, preço: 1.50, quantidade: 10, imagem: "refrigerantes.jpg" },

];

//Saldo inicial
let saldo = 0;
//Botões e inputs
let desativarbs = document.getElementById("bsurpresa");
let desativarbcp = document.getElementById("bcomprarp");
let desativarbaa = document.getElementById("babastecera");
let desativard1 = document.getElementById("dinheiro1");
let desativard2 = document.getElementById("dinheiro2");
let desativard3 = document.getElementById("dinheiro3");
let desativard4 = document.getElementById("dinheiro4");
let desativard5 = document.getElementById("dinheiro5");
let desativarl = document.getElementById("localização");
let desativarl1 = document.getElementById("localização1");
let desativarl2 = document.getElementById("localização2");
let desativarbp = document.getElementById("bpancada");
let desativarbt = document.getElementById("btalao");

//Movimentos da carteira do utilizador
function atualizarcart(valor) {

  //Variáveis dos sons
  var moeda = new Audio("Sons/onlymp3.to - Coin Drop Sound Effect-tDgkHurxPWI-192k-1706892401.mp3");
  moeda.play();

  saldo += valor;
  document.getElementById('saldocart').innerHTML = `<p>${saldo.toFixed(2)}€</p>`;
}

//Máquina de venda - abastecimento aleatório;
function abasteceralea() {

  for (let i = 0; i < 60; i++) {
    let aleatorio = Math.floor(Math.random() * 3);
    let imagem = "";
    if (aleatorio === 0) {
      produtos[i].imagem = "agua.jpg";
      produtos[i].numero = 1;
      produtos[i].preço = 1;
      produtos[i].name = "Água";
      produtos[i].quantidade = 10;
      imagem = produtos[i].imagem;
      corquantidade(produtos[i].quantidade, i);
    }
    else if (aleatorio === 2) {
      produtos[i].imagem = "refrigerantes.jpg";
      produtos[i].numero = 3;
      produtos[i].preço = 1.50;
      produtos[i].name = "Refrigerante";
      produtos[i].quantidade = 10;
      imagem = produtos[i].imagem;
      corquantidade(produtos[i].quantidade, i);
    }
    else {
      produtos[i].imagem = "tisana.jpg";
      produtos[i].numero = 2;
      produtos[i].preço = 1.20;
      produtos[i].name = "Tisana";
      produtos[i].quantidade = 10;
      imagem = produtos[i].imagem;
      corquantidade(produtos[i].quantidade, i);
    }
    let heads = document.getElementById(i + 1);
    heads.innerHTML = `<img src="Imagens/${imagem}" alt="${imagem}">`;
  }
}

//Inserir bebida surpresa na máquina
function bebidasurpresa() {

  let aleatoriobebida = Math.floor(Math.random() * 5);
  let aleatoriocelula = Math.floor(Math.random() * 60);

  let imagem = "";

  if (aleatoriobebida === 0) {
    produtos[aleatoriocelula].imagem = "whisky.jpg";
    produtos[aleatoriocelula].numero = 4;
    produtos[aleatoriocelula].preço = 2;
    produtos[aleatoriocelula].name = "Whisky";
    produtos[aleatoriocelula].quantidade = 10;
    imagem = produtos[aleatoriocelula].imagem;
    corquantidade(produtos[aleatoriocelula].quantidade, aleatoriocelula);
  }
  else if (aleatoriobebida === 1) {
    produtos[aleatoriocelula].imagem = "aguardente.jpg";
    produtos[aleatoriocelula].numero = 4;
    produtos[aleatoriocelula].preço = 2;
    produtos[aleatoriocelula].name = "Aguardente";
    produtos[aleatoriocelula].quantidade = 10;
    imagem = produtos[aleatoriocelula].imagem;
    corquantidade(produtos[aleatoriocelula].quantidade, aleatoriocelula);
  }
  else if (aleatoriobebida === 2) {
    produtos[aleatoriocelula].imagem = "rum.jpg";
    produtos[aleatoriocelula].numero = 4;
    produtos[aleatoriocelula].preço = 2;
    produtos[aleatoriocelula].name = "Rum";
    produtos[aleatoriocelula].quantidade = 10;
    imagem = produtos[aleatoriocelula].imagem;
    corquantidade(produtos[aleatoriocelula].quantidade, aleatoriocelula);
  }
  else if (aleatoriobebida === 3) {
    produtos[aleatoriocelula].imagem = "tequila.jpg";
    produtos[aleatoriocelula].numero = 4;
    produtos[aleatoriocelula].preço = 2;
    produtos[aleatoriocelula].name = "Tequila";
    produtos[aleatoriocelula].quantidade = 10;
    imagem = produtos[aleatoriocelula].imagem;
    corquantidade(produtos[aleatoriocelula].quantidade, aleatoriocelula);
  }
  else if (aleatoriobebida === 4) {
    produtos[aleatoriocelula].imagem = "vodka.jpg";
    produtos[aleatoriocelula].numero = 4;
    produtos[aleatoriocelula].preço = 2;
    produtos[aleatoriocelula].name = "Vodka";
    produtos[aleatoriocelula].quantidade = 10;
    imagem = produtos[aleatoriocelula].imagem;
    corquantidade(produtos[aleatoriocelula].quantidade, aleatoriocelula);
  }

  let heads = document.getElementById(aleatoriocelula + 1);
  heads.innerHTML = `<img src="Imagens/${imagem}" alt="${imagem}">`;

  let desativarbs = document.getElementById("bsurpresa");
  desativarbs.disabled = true;

}

//Quantidade inicial de compras
let quantidadecompras = [0, 0, 0, 0];

//Comprar produtos - gestão do dinheiro
function comprarprod() {

  //Verificar se o saldo é sufuciente para fazer a compra
  if (saldo < 1) {
    alert("Saldo insuficiente.");
    return;
  }

  //Seleção do produto a comprar
  var coluna = prompt("Insira o nº da coluna do produto a comprar: (Ex.: 8 - 8ª coluna a contar da esquerda para a direita)");

  //Controlo do prompt
  if (isNaN(coluna) || coluna < 1 || coluna > 10 || parseInt(coluna) !== parseFloat(coluna)) {
    alert('Insira um valor válido (números naturais entre 1 e 10).');
    return;
  }

  var linha = prompt("Insira a linha do produto a comprar: (Ex.: 4 - 4ª linha a contar de cima para baixo)");

  //Controlo do prompt
  if (isNaN(linha) || linha < 1 || linha > 6 || parseInt(linha) !== parseFloat(linha)) {
    alert('Insira um valor válido (números naturais entre 1 e 6).');
    return;
  }

  var totalcolunas = 10;
  var numeroproduto = (linha - 1) * totalcolunas + parseInt(coluna - 1);

  var produto = "";
  var preço = 0;
  var quantidade = 0;

  //Seleção de região de compra
  var IVA = [
    { name: "continente", taxaa: 0.06, taxat: 0.13, taxar: 0.23 },
    { name: "madeira", taxaa: 0.05, taxat: 0.12, taxar: 0.22 },
    { name: "açores", taxaa: 0.04, taxat: 0.09, taxar: 0.16 }
  ];

  var continente = document.getElementById("localização");
  var madeira = document.getElementById("localização1");
  var açores = document.getElementById("localização2");
  
  document.addEventListener("DOMContentLoaded", function() {
  });

  if (continente.checked == true) {
    if (produtos[numeroproduto].numero == 1) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxaa;
    }
    else if (produtos[numeroproduto].numero == 2) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxat;
    }
    else if (produtos[numeroproduto].numero == 3) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxar;
    }
    else if (produtos[numeroproduto].numero == 4) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxar;
    }
  }
  else if (madeira.checked == true) {
    if (produtos[numeroproduto].numero == 1) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[1].taxaa;
    }
    else if (produtos[numeroproduto].numero == 2) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[1].taxat;
    }
    else if (produtos[numeroproduto].numero == 3) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[1].taxar;
    }
    else if (produtos[numeroproduto].numero == 4) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[1].taxar;
    }
  }
  else if (açores.checked == true) {
    if (produtos[numeroproduto].numero == 1) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[2].taxaa;
    }
    else if (produtos[numeroproduto].numero == 2) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[2].taxat;
    }
    else if (produtos[numeroproduto].numero == 3) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[2].taxar;
    }
    else if (produtos[numeroproduto].numero == 4) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[2].taxar;
    }
  }
  else {
    if (produtos[numeroproduto].numero == 1) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxaa;
    }
    else if (produtos[numeroproduto].numero == 2) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxat;
    }
    else if (produtos[numeroproduto].numero == 3) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxar;
    }
    else if (produtos[numeroproduto].numero == 4) {
      produto = produtos[numeroproduto].name;
      preço = produtos[numeroproduto].preço;
      quantidade = produtos[numeroproduto].quantidade;
      IVA = IVA[0].taxar;
    }
  } 

  //Escolha sem ou com NIF
  var talão = prompt("Deseja emissão do talão com NIF incluído? (Sim-1;Não-2)");

  //Controlo do prompt
  if (isNaN(talão) || talão < 1 || talão > 2 || parseInt(talão) !== parseFloat(talão)) {
    alert('Insira um valor válido (número natural entre 1 e 2).');
    return;
  }

  var preçoIVA = preço * (1 + IVA);
  var troco = saldo - preçoIVA;
  let avariar = Math.floor(Math.random() * 20);

  //Talão imprimido
  if (talão == 1) {
    var NIF = prompt("Insira o seu NIF: ");
    
    if (isNaN(NIF) || NIF.length != 9 || parseInt(NIF) !== parseFloat(NIF)) {
      alert('Insira um código NIF válido.');
      return;
    }
    
    if (troco >= 0) {
      //Controlo quantidades
      if (produtos[numeroproduto].quantidade == 0) {
        alert('O produto que pretende comprar esgotou! Por favor escolha outro ou abasteça a máquina.');
        return;
      }
      else {
        alert('Seu troco é: ' + troco.toFixed(2) + '€');
        //A máquina avariou
        if (avariar == 0) {
          alert('Ups!! Parece que a máquina avariou devido a uma moeda ter ficado presa! Dica: tente dar pancadas na máquina de forma a consertá-la.');
          //Desativar os botões após avaria
          desativarbs.disabled = true;
          desativarbcp.disabled = true;
          desativarbaa.disabled = true;
          desativard1.disabled = true;
          desativard2.disabled = true;
          desativard3.disabled = true;
          desativard4.disabled = true;
          desativard5.disabled = true;
          desativarbt.disabled = true;
          //Variáveis dos sons
          var explosao = new Audio("Sons/onlymp3.to - Explosão com Som Efeito especial para filmes-uV-nJb2gGWE-192k-1706895691.mp3");
          explosao.play();
          return;
        }
        else {
          atualizarcart(-preçoIVA);
          produtos[numeroproduto].quantidade -= 1;
          corquantidade(produtos[numeroproduto].quantidade, numeroproduto);
          desativarbt.disabled = false;
          document.getElementById('recibo').innerHTML = '<u>Recibo do cliente:</u><br>NIF: ' + NIF + '<br>Produto: ' + produto + '<br>Preço base: ' + preço + '€' + '<br>Preço (IVA incluído): ' + preçoIVA.toFixed(2) + '€' + '<br>Troco: ' + troco.toFixed(2) + '€';
          document.getElementById('registovendas').innerHTML += produto + ' (' + preçoIVA.toFixed(2) + '€)' + '<br>';
        }
      }
    }
    else {
      alert('Saldo insuficiente para realizar a compra.');
      return;
    }
  }
  else {
    if (troco >= 0) {
      //Controlo quantidades
      if (produtos[numeroproduto].quantidade == 0) {
        alert('O produto que pretende comprar esgotou! Por favor escolha outro ou abasteça a máquina.');
        return;
      }
      else {
        alert('Seu troco é: ' + troco.toFixed(2) + '€');
        //A máquina avariou
        if (avariar == 0) {
          alert('Ups!! Parece que a máquina avariou devido a uma moeda ter ficado presa! Dica: tente dar pancadas na máquina de forma a consertá-la.');
          //Desativar os botões após avaria
          desativarbs.disabled = true;
          desativarbcp.disabled = true;
          desativarbaa.disabled = true;
          desativard1.disabled = true;
          desativard2.disabled = true;
          desativard3.disabled = true;
          desativard4.disabled = true;
          desativard5.disabled = true;
          desativarbp.disabled = false;
          desativarbt.disabled = true;
          //Variáveis dos sons
          var explosao = new Audio("Sons/onlymp3.to - Explosão com Som Efeito especial para filmes-uV-nJb2gGWE-192k-1706895691.mp3");
          explosao.play();
          return;
        }
        else {
          atualizarcart(-preçoIVA);
          produtos[numeroproduto].quantidade -= 1;
          corquantidade(produtos[numeroproduto].quantidade, numeroproduto);
          desativarbt.disabled = false;
          document.getElementById('recibo').innerHTML = '<u>Recibo do cliente:</u><br>Produto: ' + produto + '<br>Preço base: ' + preço + '€' + '<br>Preço (IVA incluído): ' + preçoIVA.toFixed(2) + '€' + '<br>Troco: ' + troco.toFixed(2) + '€';
          document.getElementById('registovendas').innerHTML += produto + ' (' + preçoIVA.toFixed(2) + '€)' + '<br>';
        }
      }
    }
    else {
      alert('Saldo insuficiente para realizar a compra.');
      return;
    }
  }

  //Filtro dos produtos que são vendidos
  switch (produtos[numeroproduto].numero) {
    //Água
    case 1:
      quantidadecompras[0]++;
      tabelaestatistica();
      break;
    // Tisana
    case 2:
      quantidadecompras[1]++;
      tabelaestatistica();
      break;
    // Refrigerante
    case 3:
      quantidadecompras[2]++;
      tabelaestatistica();
      break;
    // Bebida surpresa
    case 4:
      quantidadecompras[3]++;
      tabelaestatistica();
      break;
  }
  
}

//Função para imprimir talão das compras do cliente
function imprimirtalao() {
  let productsPurchased = [];
  for (let i = 0; i < quantidadecompras.length; i++) {
    if (quantidadecompras[i] > 0) {
      let productName = "";
      switch (i) {
        case 0:
          productName = "Água";
          break;
        case 1:
          productName = "Tisana";
          break;
        case 2:
          productName = "Refrigerante";
          break;
        case 3:
          productName = "Bebida surpresa";
          break;
      }
      productsPurchased.push(`${productName} (${quantidadecompras[i]}x)`);
    }
  }
  let talaoContent = productsPurchased.length > 0 ? productsPurchased.join(', ') : 'Nenhum produto comprado';
  document.getElementById('talão').innerHTML = `<u>Talão de compras:</u><br>Produtos comprados: ${talaoContent}`;
}

//Função para calcular a quantidade de produtos vendidos e fazer com que apareçam na tabela de estatística
function tabelaestatistica() {
  const ctx = document.getElementById('estatistica').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Água', 'Tisana', 'Refrigerante', 'Bebida surpresa'],
      datasets: [{
        label: 'Quantidade Vendida',
        data: quantidadecompras,
        backgroundColor: ['blue', 'yellow', 'black', 'green']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  setTimeout(tabelaestatistica, 500);
  }
tabelaestatistica();

//Função da mudança de cor das células da tabela consoante a quantidade de produtos
function corquantidade(quantidade, IDcelula) {

  let celula = document.getElementById(IDcelula + 1);

  if (quantidade < 3) {
    celula.style.backgroundColor = "red";
  }
  else if (quantidade >= 3 && quantidade <= 5) {
    celula.style.backgroundColor = "yellow";
  }
  else {
    celula.style.backgroundColor = "green";
  }
}

//Dar pancadas na máquina para repará-la
function pancada() {
  let pancada = Math.floor(Math.random() * 2);
  //Variáveis dos sons
  var chicotada = new Audio("Sons/onlymp3.to - som_de_chicote-NI7z1MAPJkc-192k-1706893084.mp3");
  chicotada.play();


  if (pancada == 0) {
    alert('A moeda desceu e a máquina está a funcionar novamente!');
    desativarbs.disabled = false;
    desativarbcp.disabled = false;
    desativarbaa.disabled = false;
    desativard1.disabled = false;
    desativard2.disabled = false;
    desativard3.disabled = false;
    desativard4.disabled = false;
    desativard5.disabled = false;
    desativarbp.disabled = true;
    desativarbt.disabled = false;
    addRadioListener();

  }
  else {
    alert('Tente novamente, a moeda ainda está presa!');
  }
}

//Função bloquear radio inputs após escolha de um deles
function addRadioListener() {
  const regiaoInputs = document.getElementsByName('localização');
  regiaoInputs.forEach(input => {
    input.addEventListener('change', (event) => {
      regiaoInputs.forEach(radio => {
        if (radio !== event.target) {
          radio.disabled = true;
        }
      });
    });
  });
}
addRadioListener();

//Máquina de venda - abastecimento automático
function abastecerauto() {
  for (let i = 0; i < 60; i++) {
    desativarbp.disabled = true;
    desativarbt.disabled = true;

    let imagem = "";
    if (i < 20) {
      produtos[i].name = "Água";
      imagem = produtos[i].imagem;
      corquantidade(produtos[i].quantidade, i);
    }
    else if (i < 40) {
      produtos[i].name = "Tisana";
      imagem = produtos[i].imagem;
      corquantidade(produtos[i].quantidade, i);
    }
    else {
      produtos[i].name = "Refrigerante";
      imagem = produtos[i].imagem;
      corquantidade(produtos[i].quantidade, i);
    }
    let heads = document.getElementById(i + 1);
    heads.innerHTML = `<img src="Imagens/${imagem}" alt="${imagem}">`;
  }
}
abastecerauto();