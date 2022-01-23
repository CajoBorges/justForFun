//Data e hora

const d = new Date();
let day = d.getUTCDate();

let month = (d.getUTCMonth() <= 9) ? "" + d.getUTCMonth() : d.getUTCMonth();
let monthM = month + 1;
let year = d.getUTCFullYear();
let hour = d.getUTCHours();
let minutes = d.getUTCMinutes() <= 9 ? "0" + d.getUTCMinutes() : d.getUTCMinutes();

let dia = day + "/" + monthM + "/" + year
let hora = hour + ":" + minutes
let data = dia + " " + hora
console.log(data)

document.getElementById("data").innerHTML = data



//Rato

let ratoElement = document.querySelector("#rato")
let body = document.querySelector('body')

body.addEventListener('mousemove', runEvent);

function runEvent(c) {
  output = ratoElement.innerHTML = "X: " + c.offsetX + "&nbsp; &nbsp;" + "Y: " + c.offsetY;
  document.querySelector('#boxABC').style.background = "rgb(" + c.offsetX + "," + c.offsetY + ", 40)";

}



//                                   Quiz



let points = 0



// Pergunta 1

document.querySelector('.errado-AA').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-AA').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-AB').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-AB').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-AC').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-AC').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.certo-A').addEventListener('click', (e) => {
  alert('Certo!');
  document.querySelector('.certo-A').style.background = 'greenyellow';
  points = points + 1;
});



// Pergunta 2

document.querySelector('.errado-BA').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-BA').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-BB').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-BB').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-BC').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-BC').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.certo-B').addEventListener('click', (e) => {
  alert('Certo!');
  document.querySelector('.certo-B').style.background = 'greenyellow';
  points = points + 1;
});



// Pergunta 3

document.querySelector('.errado-CA').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-CA').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-CB').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-CB').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.certo-C').addEventListener('click', (e) => {
  alert('Certo!');
  document.querySelector('.certo-C').style.background = 'greenyellow';
  points = points + 1;
});



// Pergunta 4

document.querySelector('.errado-DA').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-DA').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-DB').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-DB').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.certo-D').addEventListener('click', (e) => {
  alert('Certo!');
  document.querySelector('.certo-D').style.background = 'greenyellow';
  points = points + 1;
});



// Pergunta 5

document.querySelector('.errado-EA').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-EA').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-EB').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-EB').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.errado-EC').addEventListener('click', (e) => {
  alert('Errado!');
  document.querySelector('.errado-EC').style.background = 'Tomato';
  points = points + -1;
});

document.querySelector('.certo-E').addEventListener('click', (e) => {
  alert('Certo!');
  document.querySelector('.certo-E').style.background = 'greenyellow';
  points = points + 1;
});



// Pergunta 6

let seis = document.querySelector('#seis');
let seisSubmit = document.querySelector('#submitSeis');

seisSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  seisValor = seis.value
  if (seisValor == -9) {
    alert('Certo!');
    seisSubmit.style.background = 'greenyellow';
    points = points + 1;
  }
  else {
    alert('Errado!');
    seisSubmit.style.background = 'Tomato';
    points = points + -1;
  }
  ;
});



// Pergunta 7

let sete = document.querySelector('#sete');
let seteSubmit = document.querySelector('#submitSete');

seteSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  seteValor = sete.value
  if (seteValor == 2) {
    alert('Certo!');
    seteSubmit.style.background = 'greenyellow';
    points = points + 1;
  }
  else {
    alert('Errado!');
    seteSubmit.style.background = 'Tomato';
    points = points + -1;
  }
});



// Pontuação

const seePoints = document.querySelector('#points')

seePoints.addEventListener('click', (e) => {
  if (points >= 8) {
    alert('Não faças batota!');
    points = "Fizeste batota. Agora tens de voltar a carregar a página e começar tudo de novo."
  }
  else if (points == 7) {
    alert(points + "/7                    " + "Parabéns! Acertaste todas as perguntas.");
    console.log(points);
  }
  else {
    alert(points + "/7");
    console.log(points);
  }

});
