"use strict";
import * as view from "./views.js";
import { search } from "./services/index.js";
import { SearchService } from "./services/search.service.js";

const query: HTMLInputElement = document.querySelector("#query");
const form = document.querySelector("#form");
const searchQuery: HTMLSpanElement = document.querySelector("#searchQuery");
const searchService = new SearchService();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(query.value);
  searchService.search(query.value, searchQuery);
  query.value = "";
});

document.addEventListener("click", function (e) {
  if ((e.target as any).classList[0] === "add") {
    const id = (e.target as any).id.slice(-1);
    view.displayReadingList(id);
  }
  if ((e.target as any).classList[0] === "remove") {
    const btn = e.target;
    const parent = (btn as any).closest(".list-item");
    parent.remove();
  }
});
