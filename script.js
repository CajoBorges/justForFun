let flexBox = document.querySelector('.background');
let btnRed = document.querySelector('.btnRed');
let btnOrange = document.querySelector('.btnorange');
let btnYellow = document.querySelector('.btnyellow');
let btnGreen = document.querySelector('.btngreen');
let btnBlue = document.querySelector('.btnblue');
let btnAlert = document.querySelector('.btn-alert');
var box = document.getElementById('boxABC');


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



//Rato e Box

let ratoElement = document.querySelector("#rato")
let body = document.querySelector('body')

body.addEventListener('mousemove', runEvent);

function runEvent(c){
  output = ratoElement.innerHTML = "X: " + c.offsetX + "&nbsp; &nbsp;" + "Y: " + c.offsetY;
  document.querySelector('#boxABC').style.background = "rgb(" + c.offsetX + "," + c.offsetY + ", 40)";
  
}



// Background Color


btnRed.addEventListener('click', (e) => {
    flexBox.style.background = 'Tomato';
});

btnOrange.addEventListener('click', (e) => {
    flexBox.style.background = 'orange';
});


btnYellow.addEventListener('click', (e) => {
    flexBox.style.background = '#FFD700';
});

btnGreen.addEventListener('click', (e) => {
    flexBox.style.background = 'MediumSeaGreen';
});


btnBlue.addEventListener('click', (e) => {
    flexBox.style.background = 'dodgerBlue';
});



// Box




// Mensagem

btnAlert.addEventListener('click', (e) => {
    alert('Pop-up Javacript');
});



// Lista

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'x';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}


function removeItem(e){
  if(e.target.classList.contains('x')){
    if(confirm('De certeza?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
