const displayData = (item) => {
  const container = document.querySelector('.container-1');
  const box = document.createElement('div');
  box.className = 'firstbox';

  const h4 = document.createElement('h4');
  h4.innerHTML = `${item.date} ${item.title}`;

  const img = document.createElement('img');
  img.className = 'float';
  img.src = item.img ? item.img.src : 'spoon.jpg';

  img.alt = item.img ? img.src.alt : 'spatula image not displaying.';

  const p = document.createElement('p');
  p.innerHTML = item.body;
  box.append(h4);
  box.append(img);
  box.append(p);
  container.append(box);
};

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear().toString().substring(2);
const now = day + '/' + month + '/' + year;

const data = [
  {
    id: Math.floor(Math.random() * 1000),
    date: now,
    title: 'Spatulas',
    img: {
      src: 'spoon.jpg',
      alt: 'spatula image not displaying.',
    },
    body:
      'Yesterday I went to the store and got so much needed <a href="https://www.youtube.com/watch?v=2XbCWmY0eqY">spatulas!</a> (what better way to say I love myself than to buy myself a spatula?)',
  },
  {
    id: Math.floor(Math.random() * 1000),
    date: now,
    title: 'Cookie Monster Cupcakes',
    img: {
      src: 'emoji.jpg',
      alt: 'Cookie Monster not displaying.',
    },
    body:
      "My favourite cartoon character is Cookie Monster, and my favourite desert is Cupcakes, so Cookie Monster Cupcakes are the best of both worlds. Did you know? Cookie Monster once said, Sometimes me think what is love, and then me think love is what last cookie is for. Me give the last cookie for you. I wonder if the same applies to cupecakes? (If so, I don't think I can ever love ANYONE!)",
  },
];
console.log(data);
const div = document.querySelector('.container-1');

// const noteCount = document.querySelector('.noteCount');

let dataLength= document.querySelector('.count');
let count = data.length;
count.innerHTML = dataLength++;
// let dataLengthNow = dataLength++;


const button = document.querySelector('.add-note-btn');
const addForm = document.querySelector('.add-form');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('#form');

form.onsubmit = (e) => {
  e.preventDefault();
  let title = document.querySelector('#form-title');
  let body = document.querySelector('#form-body');
  const item = {
    id: Math.floor(Math.random() * 1000),
    date: now,
    title: title.value,
    body: body.value,
  };

  data.push(item);
  // dataLength = ++dataLength; 

  // displayData(noteNumber);
  console.log(typeof dataLength);

 // document.getElementById("dataLength").innerHTML = noteNumber;
  displayData(item);
 
  // title.value = '';
  // body.value = '';
  addForm.style.display = 'none';
};

button.onclick = () => {
  addForm.style.display = 'block';
};

cancel.onclick = (e) => {
  addForm.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == addForm) {
    addForm.style.display = 'none';
  }
};

data.map((item) => displayData(item));