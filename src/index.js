//Jais code
let addToy = false;
const baseURL = "http://localhost:3000/toys";

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // show and hide form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
//
function addToyCard(toy) {
  const toyCollection = document.getElementById("toy-collection");
  //
  const div = document.createElement("div");
  div.className = "card";
  //
  toyCollection.appendChild(div);
  //
  const h2 = document.createElement("h2");
  h2.textContent = toy.name;
  div.appendChild(h2);
  //child only affects child not parent
  const image = document.createElement("img");
  image.className = "toy-avatar";
  image.src = toy.image;
  div.appendChild(image);
  //
  const likes = document.createElement("p");
  likes.textContent = toy.value;
  div.appendChild(likes);
  //
  const btn = document.createElement("button");
  btn.className = "like-btn";
  btn.id = toy.id;
  div.appendChild(btn);
}
//
function fetchToys() {
  fetch("http://localhost:3000/toys")
    .then((response) => response.json())
    .then((toysData) => addToyCards(toysData));
}
//uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
function addToyCards(toys) {
  toys.forEach(addToyCard);
}
//show them
fetchToys();
