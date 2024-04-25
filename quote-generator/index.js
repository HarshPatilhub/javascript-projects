const button = document.querySelector("#newQuoteBtn");
const quoteText = document.querySelector(".quote-text");
const author = document.querySelector(".author");

button.addEventListener("click", function(){
    fetchRandomQuote();
});

async function fetchRandomQuote() {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    displayQuote(randomQuote.text, randomQuote.author);
}

function displayQuote(quote, authorName) {
    quoteText.textContent = quote;
    author.textContent = `- ${authorName || "Unknown"}`;
}
