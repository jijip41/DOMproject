'use strict'

const text = document.querySelector('.text');
const btn = document.querySelector(".add-btn");
const list = document.querySelector('.list');

text.addEventListener('focus', () => {
  text.value = '';
})
console.log(text.value);

btn.addEventListener('click', updateValue);

function updateValue(e) {
  e.preventDefault()
  let item = text.value;
  if (item.length > 0) {
    let li = document.createElement('li');
    let newItem = list.appendChild(li);
    newItem.innerHTML = `${item} <i class="far fa-trash-alt"></i>`;
  } else {
    text.style.border = "solid 2px red"
  }
  text.value = '';
}

