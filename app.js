console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const giphyURL = "https://api.giphy.com/v1/gifs/translate"
// gives the Giphy URL a name for esier access
const giphyKey = "R72gjIqzsL3uZJKi67FE9Ff0FdgNKj53";
// gives my Giphy API key a name for easier access

let feedback = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gif = document.querySelector("#imageContainer > img");
// selecting elements from the DOM

searchBtn.addEventListener("click", (event) =>{ // creates a click event
    getGif(searchInput.value); // calls the getGif function
});
function getGif(searchTerm){ 
    fetch(`${giphyURL}?api_key=${giphyKey}&s=${searchTerm}`)
    // basically creates a URL using the giphyURL and giphyKey 
    // including query parameters
    .then((res) => res.json()) // converts the result into JSON
    .then((body) => {
        gif.src = body.data.images.original.url;
    }) // displays the result of the search 
    .catch((err) => {
        console.log(err);
        feedback.textContent = err.message;
    }); // displays an error message if there in an error
};