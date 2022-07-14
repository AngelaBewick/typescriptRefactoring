"use strict";
import * as view from "./views.js";

const query = document.querySelector("#query");
const form = document.querySelector("#form");
const searchQuery = document.querySelector("#searchQuery");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const search = async function (bookSearch) {
  document.querySelector(".results").innerHTML = "";

  const result = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=40&key=AIzaSyDQR-0Xou8x6zr0-4e0X6q3jqBDyBdWfC8`
  );
  const data = await result.json();

  if (data.totalItems === 0) {
    searchQuery.innerHTML = "No results.";
    throw Error("No Results");
  }

  const dataArray = data.items;
  searchQuery.innerHTML = bookSearch;

  view.displayData(dataArray);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(query.value);
  search(query.value);
  query.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target.classList[0] === "add") {
    const id = e.target.id.slice(-1);
    view.displayReadingList(id);
  }
  if (e.target.classList[0] === "remove") {
    const btn = e.target;
    const parent = btn.closest(".list-item");
    parent.remove();
  }
});
