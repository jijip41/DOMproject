'use strict'

const text = document.querySelector('.text');
const btn = document.querySelector(".add-btn");
const list = document.querySelector('.list');


btn.addEventListener('click', updateValue);

text.addEventListener('click', () => {
  text.value = '';
})

function updateValue(e) {
  e.preventDefault();

  if (text.value.length > 0) {
    const newRow = document.createElement('div');
    const item = document.createElement('span');
    const deleteBtn = document.createElement('button');

    newRow.setAttribute('class', 'new-row');
    item.setAttribute('class', 'item')

    item.innerHTML = text.value;
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

    newRow.appendChild(item);
    newRow.appendChild(deleteBtn);
    list.appendChild(newRow);


    deleteBtn.addEventListener('click', () => {
      list.removeChild(newRow);
    })
    text.value = '';
    text.focus();
  } else {
    text.style.border = "2px solid red";
  }

}
