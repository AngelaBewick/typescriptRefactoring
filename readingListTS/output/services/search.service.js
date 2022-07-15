var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { displayData } from "../views.js";
export class SearchService {
    search(bookSearch, searchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            document.querySelector(".results").innerHTML = "";
            const result = yield fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=40&key=AIzaSyDQR-0Xou8x6zr0-4e0X6q3jqBDyBdWfC8`);
            const data = yield result.json();
            if (data.totalItems === 0) {
                searchQuery.innerHTML = "No results.";
                throw Error("No Results");
            }
            const dataArray = data.items;
            searchQuery.innerHTML = bookSearch;
            yield displayData(dataArray);
        });
    }
}
