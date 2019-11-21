/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//Title: Treehouse Project 1
//Project: Random Quote Generator
//Goal: exceed expectation
//The comments below are in order of how i proceeded throug the Project
//Created a different file(quotes.js) for my quotes to keep things organized
//create a variable (timerOut) that holds the setInterval() methods and give it the printQuote() and 10000 millseconds for parameters
let timeOut;
//create a variable(usedQuotes) to hold an empty array that stores quotes thats been projected
let usedQuotes = [];
const loadButton = document.getElementById('loadQuote');
//create a function(getRandomQuote) to retrieve a random quote from the quotes array
const getRandomQuote = () => {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	let getQuotes = quotes[randomNumber];
	//push the already projected quotes to the empty array(usedQuotes[])
	usedQuotes.push(getQuotes);
	//create a splice method that removes a quote from the quotes array each time it runs and an 'if' statement
	//that recycles quotes beween the quotes and usedQuotes array
	quotes.splice(randomNumber, 1);
	if (quotes.length === 0) {
		quotes = usedQuotes;
		usedQuotes = [];
	}
	return getQuotes;
}
//create a function(rgbColor) that returns a random color and added it to the printQuote function to produce
//random background-color each time through the quotes
const rgbColor = () => {
	let randomRgb = 'rgb(';
	randomRgb += Math.floor(Math.random() * 255) + ',';
	randomRgb += Math.floor(Math.random() * 255) + ',';
	randomRgb += Math.floor(Math.random() * 255);
	randomRgb += ')';
	return randomRgb;
}
//create a function(printQuote) that calls the getRandomQuote() function and stores the returned quote object in a variable
//construct a string in the printQuote() function containing different properties of the quote object and prints out the final
// html to the page using the innerHTML on the 'quote-box' div
const printQuote = () => {
	let randomQuote = getRandomQuote();
	let quotesHTML = `<p class="quote"> ${randomQuote.quote } </p>`;
	quotesHTML += `<p class="source"> ${randomQuote.source} </p>`;
	quotesHTML += `<span class"citation"> ${randomQuote.citation} </span>`;
	quotesHTML += `<span class="year"> ${randomQuote.year}</span>`;
	//called the rgbColor() on the documents body backgroundColor in the printQuote();
	//So each time the printQuote() is called so is a random backgroundColor along with
	document.body.style.backgroundColor = rgbColor();
	return document.getElementById('quote-box').innerHTML = quotesHTML;
}
//create a variable (timerOut) that holds the setInterval() methods and give it the printQuote() and 10000 millseconds for parameters
timeOut = window.setInterval(printQuote, 10000);
//The button selected and given an addEventListener, shows a different quote each time clicked
loadButton.addEventListener("click", () => {
	printQuote();
	clearInterval(timeOut);
	timeOut = window.setInterval(printQuote, 10000);
});
