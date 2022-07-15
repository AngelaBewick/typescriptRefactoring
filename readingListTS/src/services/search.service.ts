import { displayData } from "../views.js";

export class SearchService {

    public async search(bookSearch: string, searchQuery: Element) {
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
      
        await displayData(dataArray);
    }
}