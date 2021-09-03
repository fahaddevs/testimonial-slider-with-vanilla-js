const newNode =  document.querySelectorAll('.card')
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let showFirst = 0

window.addEventListener('DOMContentLoaded', function(){
  showPerson(showFirst)
});

function showPerson (person) {
  sliderWrapper.insertAdjacentElement('afterbegin', newNode[Math.abs(person)])
}

nextBtn.addEventListener('click', function(){
  if (showFirst > newNode.length - 2) {
    showFirst = 0;
  } else {
    showFirst++
  }
  showPerson(showFirst)
});

prevBtn.addEventListener('click', function(){
  if (showFirst === 0) {
    showFirst = newNode.length -1;
  } else {
    showFirst--
  }
  showPerson(showFirst)
});
