
const quoteEl = document.querySelector(".quote-text");
const authorEl = document.querySelector(".quote-author");





function backgroundChanger(){
  let randomId = Math.floor(Math.random() * 10000000);
document.querySelector(".container").style.background =
  "url('https://source.unsplash.com/random/?Landscape&" +
  randomId +
  "') center/cover no-repeat";

}



function bodybackgroundChanger(){
  let randomId = Math.floor(Math.random() * 10000000);
document.querySelector("body").style.background =
  "url('https://source.unsplash.com/random/?Landscape&" +
  randomId +
  "') center/cover no-repeat";

}


backgroundChanger()





function redirectToSecond() {
  window.location.href = "./second.html"
}



///Regular quotes


async function randomQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;

  backgroundChanger()
  bodybackgroundChanger()
  
}





randomQuote();
