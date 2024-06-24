console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let submitSearch = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let image = document.querySelector("#image");
let feedback = document.querySelector("#feedback");


submitSearch.addEventListener("click", () => {

fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=bd9P3jeIqVWxW2vyL1B0dGl6xD731key&s=" +
      searchInput.value,
    { mode: "cors" }
  )

.then((response) => {
    console.log(response)
    return response.json();
})
.then((parse) => {
  console.log(parse)
  image.src = parse.data.images.original.url
  searchInput.value = "";
  feedback.textContent = "";
   
})
.catch((err) => {

    console.error(err)
    feedback.textContent = err.message;
    console.log("failure is not an option");
});

});
