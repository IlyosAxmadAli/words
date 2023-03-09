import { getData } from "./request";
import { updateUI } from "./updateUI";
const form = document.querySelector("form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value;
  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  getData(`${API}${query}`).then((data) => {
    console.log(data);
    updateUI(data[0]);
  });
  form.reset();
});
