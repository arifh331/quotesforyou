
//Name of file quotes-api.mjs

const quoteEl = document.querySelector(".quote-text");
const authorEl = document.querySelector(".quote-author");
// import mongodb from 'mongodb'

// console.log('this is before mongodb')
// console.log(mongodb)


let array_of_quotes = []

//Random quote is called in the beginning 

if (window.location.href == "./index.html") {
  randomQuote()

}





function addQuote(){

  let quotesString = localStorage.getItem('quotes');

  

  array_of_quotes = JSON.parse(quotesString);

  //This array is adding in a object of current quote and current author
  array_of_quotes.push({quote:quoteEl.textContent,author:authorEl.textContent})
  bodybackgroundChanger()
  backgroundChanger()
  randomQuote()
  

  //Preping the array of quotes to go into local storage
  quotesString = JSON.stringify(array_of_quotes)
  localStorage.setItem('quotes',quotesString)


  
}






  function removeQuote(){
    // console.log("This is array of quotes before removed"+array_of_quotes)

    const filteredArray = array_of_quotes.filter(obj => obj['author'] !== authorEl.textContent);

    array_of_quotes = filteredArray;
    //array_of_quotes.push({[quoteEl.textContent]:authorEl.textContent})

    // console.log('This is array of quotes after removed'+array_of_quotes);

    let quotesString = JSON.stringify(array_of_quotes)
    localStorage.setItem('quotes',quotesString)

    favQuote()
  }




  function favQuote(){
  
  
    var quotesString = localStorage.getItem('quotes');

    

    array_of_quotes = JSON.parse(quotesString);

    // console.log("This is array of quotes from the favquote"+array_of_quotes)

    const randomIndex = Math.floor(Math.random() * array_of_quotes.length);

    

  // Access the element at the random index
    const randomElement = array_of_quotes[randomIndex];


    //Checking if you actually have favs saved
    if (array_of_quotes.length == 0) {
      quoteEl.textContent='You have no quotes favorited right now'
      authorEl.textContent='administrator'

    }
    else{
      quoteEl.textContent = randomElement.quote
      authorEl.textContent=randomElement.author
      backgroundChanger()
      bodybackgroundChanger()

    }

  
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










///Regular quotes
async function randomQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;

  backgroundChanger()
  bodybackgroundChanger()
  
}


///Rotate quotes in the quotes array

function rotateQuote(){
  const randomIndex = Math.floor(Math.random() * array_of_quotes.length);

  

  // Access the element at the random index
    const randomElement = array_of_quotes[randomIndex];


    //Checking if you actually have favs saved
    if (array_of_quotes.length == 0) {
      quoteEl.textContent='You have no quotes favorited right now'
      authorEl.textContent='administrator'

    }
    else{
      quoteEl.textContent = randomElement.quote
      authorEl.textContent=randomElement.author
      backgroundChanger()
      bodybackgroundChanger()

    }

  
   
  }







//This is the function when are at fav page 






//Structure to see what html file should be displayed
if(window.location.pathname=='/index.html') {
  randomQuote();
}
else {
favQuote()
}


function redirectToSecond() {
  window.location.href = "./second.html"
}


function redirectHome(){
  window.location.href = "./index.html"

}
