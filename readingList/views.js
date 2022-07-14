const searchDisplay = document.querySelector(".results");
const listDisplay = document.querySelector("#tbrList");

const img = "images/books-tea.jfif";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const displayData = function (data) {
  let count = 0;
  // console.log(data);
  data.forEach((element) => {
    searchDisplay.insertAdjacentHTML(
      "beforeend",
      `
            <div class="search-result">
              <img class="grid-i book-cover" src="${
                element.volumeInfo.imageLinks
                  ? element.volumeInfo.imageLinks.thumbnail
                  : img
              }"/>
              <h2 id='title${count}' class="book-title grid-a">
                  ${element.volumeInfo.title}
              </h2>
              <h4 id='author${count}' class="author grid-b">
                  ${element.volumeInfo.authors}
              </h4>
              <p id='summary${count}' class="short-summary grid-c">
                  ${element.volumeInfo.description}
              </p>
              <button id='add${count}' class="add grid-d">add</button>
          </div>`
    );
    count = count + 1;
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const displayReadingList = function (id) {
  const title = document.querySelector(`#title${id}`).textContent;
  const author = document.querySelector(`#author${id}`).textContent;
  const summary = document.querySelector(`#summary${id}`).textContent;

  const clippedSummary = summary.slice(0, 300) + "...";

  listDisplay.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="list-item">
      <h2 class="grid-a">${title}</h2>
      <h4 class="grid-b">${author}</h4>
      <p class="grid-c">
      ${clippedSummary}
      </p>
      <button class="remove grid-d" type="button">remove</button>
      <label class="grid-e"><input type="checkbox" />Finished!</label>
    </div>`
  );
};
