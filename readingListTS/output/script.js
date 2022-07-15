"use strict";
import * as view from "./views.js";
import { SearchService } from "./services/search.service.js";
const query = document.querySelector("#query");
const form = document.querySelector("#form");
const searchQuery = document.querySelector("#searchQuery");
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
