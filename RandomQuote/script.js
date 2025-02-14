const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
];
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = `"${quotes[randomIndex].text}"`;
  author.textContent = `- ${quotes[randomIndex].author}`;
});
