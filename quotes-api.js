
const quoteEl = document.querySelector(".quote-text");
const authorEl = document.querySelector(".quote-author");

let array_of_quotes = []




function addQuote(){

  //This array is adding in a object of current quote and current author
  array_of_quotes.push({quote:quoteEl.textContent,author:authorEl.textContent})
  bodybackgroundChanger()
  backgroundChanger()
  randomQuote()
  

  //Preping the array of quotes to go into local storage
  let quotesString = JSON.stringify(array_of_quotes)
  localStorage.setItem('quotes',quotesString)


  
}






function removeQuote(){
  console.log(array_of_quotes)

const filteredArray = array_of_quotes.filter(obj => obj['author'] !== authorEl.textContent);

  array_of_quotes = filteredArray;
  //array_of_quotes.push({[quoteEl.textContent]:authorEl.textContent})

  console.log(array_of_quotes);

  favQuote()
}




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


//backgroundChanger()





function redirectToSecond() {
  window.location.href = "./second.html"
}


function redirectHome(){
  window.location.href = "./index.html"

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



//This is the function when are at fav page 


function favQuote(){
  
  var quotesString = localStorage.getItem('quotes');

  array_of_quotes = JSON.parse(quotesString);

  const randomIndex = Math.floor(Math.random() * array_of_quotes.length);

  

// Access the element at the random index
  const randomElement = array_of_quotes[randomIndex];

  quoteEl.textContent = randomElement.quote
  authorEl.textContent=randomElement.author
  backgroundChanger()
  bodybackgroundChanger()
}

//randomQuote()
if(window.location.pathname=='/index.html') {
  randomQuote();
}



else {
favQuote()
}

