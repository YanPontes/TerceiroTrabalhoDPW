
function controladoraDia() {
  var data = new Date();
  var dia = data.getDay();
  var img = document.getElementById('imgdodia');
  var txt = document.getElementById('mensagem');
  viewData(dia,img,txt);
}

function viewData(dia,img,txt) {
  if (dia == 0) {
    img.src = "../img/leaoprimeiro.jpg";
    txt.innerHTML = "Bom Domingo!";
  }
  else if (dia == 1) {
    img.src = "../img/leaosegundo.jpg";
    txt.innerHTML = "Boa Segunda!";
  }
  else if (dia == 2) {
    img.src = "../img/leaoterceiro.jpg";
    txt.innerHTML = "Boa Terça!";
  }
  else if (dia == 3) {
    img.src = "../img/leaoquarto.jpg";
    txt.innerHTML = "Boa Quarta!";
  }
  else if (dia == 4) {
    img.src = "../img/leaoquinto.jpg";
    txt.innerHTML = "Boa Quinta!";
  }
  else if (dia == 5) {
    img.src = "../img/leaosexto.jpg";
    txt.innerHTML = "Boa Sexta!";
  }
  else {
    img.src = "../img/leaosetimo.jpg";
    txt.innerHTML = "Bom Sábado!";
  }
}

function controladoraMenu() {
  var botao = document.getElementById('btn-menu').checked;
  viewMenu(botao);
}

function viewMenu(botao) {
  if (botao == true) {
    document.getElementById('menu-responsivo').style.display="flex";
  }
  else {
    document.getElementById('menu-responsivo').style.display="none";
  }
}

function controladoraQuiz() {
  var c1 = document.getElementById('c1').checked;
  var a2 = document.getElementById('a2').checked;
  var c3 = document.getElementById('c3').checked;
  var d4 = document.getElementById('d4').checked;
  var b5 = document.getElementById('b5').checked;
  var d6 = document.getElementById('d6').checked;
  var b7 = document.getElementById('b7').checked;
  var a8 = document.getElementById('a8').checked;
  var c9 = document.getElementById('c9').checked;
  var b10 = document.getElementById('b10').checked;

  var acertos = modeloQuiz(c1,a2,c3,d4,b5,d6,b7,a8,c9,b10);
  viewQuiz(acertos);
}

function modeloQuiz(resp1,resp2,resp3,resp4,resp5,resp6,resp7,resp8,resp9,resp10) {
  var contador = 0;
  if (resp1 == true) {
    contador = contador + 1;
  }
  if (resp2 == true) {
    contador = contador + 1;
  }
  if (resp3 == true) {
    contador = contador + 1;
  }
  if (resp4 == true) {
    contador = contador + 1;
  }
  if (resp5 == true) {
    contador = contador + 1;
  }
  if (resp6 == true) {
    contador = contador + 1;
  }
  if (resp7 == true) {
    contador = contador + 1;
  }
  if (resp8 == true) {
    contador = contador + 1;
  }
  if (resp9 == true) {
    contador = contador + 1;
  }
  if (resp10 == true) {
    contador = contador + 1;
  }

  return contador;
}

function viewQuiz(numeroacertos) {
  document.getElementById('acertos').innerHTML="Você acertou: "+numeroacertos+" questões!"
}

//Mudando a cor e fonte quando o mouse passa por cima//

function controladoraParagrafo(movimento) {
  var paragrafo = document.getElementById('paragrafo');
  viewParagrafo(paragrafo,movimento);
}

function viewParagrafo(elemento,movimento) {
  if (movimento == "in") {
    elemento.style.fontSize = "0.7em";
    elemento.style.color = "#000080";
    elemento.style.fontFamily = "Courier New, monospace";
  }

  else {
    elemento.style.fontSize = "1em";
    elemento.style.color = "#000000";
    elemento.style.fontFamily = "'Roboto', sans-serif"
  }
}

//mudar a cor para mostrar onde está o cursor//
function controladoraEstiloQuiz(pergunta,movimento) {
  if (movimento == "in") {
    pergunta.style.backgroundColor="#FF8C00";
  }
  else {
    pergunta.style.backgroundColor="#fff";
  }
}
