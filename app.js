const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "icon-visual.svg",
  },
];
data.forEach((datas, index) => {
  console.log(datas);
});
// targeting the box for the data//
const box = document.querySelector(".box");
data.forEach((key, index) => {
  box.innerHTML += `
  <li class="key${index}">
              <div class="left">
                <span class="icon">
                  <img src="${key.icon}" alt="${key.category}">
                </span>
                <h3 class="${key.category}">${key.category}</h3>
              </div>
              <div class="right">
                <span class="score">${key.score}</span>
                <span class="over">/</span>
                <span class="over">100</span>
              </div>
            </li>
  `;
});
// adding some effects using setinterval//
const percent = document.querySelector('.percent');
window.addEventListener('animationend', () => {
let percentScore = 0;
const myInterval = setInterval(scorePercent,30)
function scorePercent() {
   percentScore++
   if(percentScore == 76) {
    clearInterval(myInterval)
   }
   percent.innerText = percentScore
}
})
