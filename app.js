const reviews = [
  {
    id: 1,
    name: 'Saira', 
    job: 'Web developer',
    img: 'images/1.png',
    text: 'Nisi voluptatum molestias dignissimos? Neque sit dolor dolores cupiditate voluptatem veritatis eveniet, aut labore, aliquam excepturi minus dolorum fugit. Rerum, distinctio non.'
  },
  {
    id: 2,
    name: 'fahad', 
    job: 'Frontend developer',
    img: 'images/2.png',
    text: 'Gnissimos? Neque sit dolor dolores cupiditate voluptatem veritatis eveniet, aut labore, aliquam excepturi minus dolorum fugit. Rerum, distinctio non.'
  },
  {
    id: 3,
    name: 'Smith', 
    job: 'Web developer',
    img: 'images/3.png',
    text: 'Luptatum molestias dignissimos? Neque sit dolor dolores cupiditate voluptatem veritatis eveniet, aut labore, aliquam excepturi minus dolorum fugit. Rerum, distinctio non.'
  },
  {
    id: 4,
    name: 'Djajaj', 
    job: 'Web developer',
    img: 'images/4.png',
    text: 'Dignissimos? Neque sit dolor dolores cupiditate voluptatem veritatis eveniet, aut labore, aliquam excepturi minus dolorum fugit. Rerum, distinctio non.'
  }
]


// select items 
const img = document.getElementById('img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item 
let currentItem = 0;

// load initial item 
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

function showPerson (person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person 
nextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person 
prevBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson(currentItem);
});
