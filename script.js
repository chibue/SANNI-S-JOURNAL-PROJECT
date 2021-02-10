const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear().toString().substring(2);
const now = day + '/' + month + '/' + year;


const data = [];

const div = document.querySelector('.container-1');


const count = document.querySelector('.count');
count.innerHTML = div.childElementCount;

const button = document.querySelector('.add-note-btn');
const addForm = document.querySelector('.add-form');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('#form');


form.onsubmit = (e) => {
  e.preventDefault();
  let title = document.querySelector('#form-title');
  let body = document.querySelector('#form-body');
  data.push({
    title: now + ': ' + title.value,
    body: body.value,
  });
const newData = data[data.length - 1]
  console.log(newData);
    const div = document.createElement('container-1');
    const h2 = document.createElement('h2');
    const pBody = document.createElement('p');

    div.appendChild(container-1);
    div.appendChild(h2);
    h2.innerHTML = newData.title;
    div.appendChild(pBody);
    pBody.innerHTML = newData.body;
    count.innerHTML = div.childElementCount;
  title.value = ''
  body.value = ''
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
