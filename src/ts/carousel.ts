import { buildList } from "./resources"
import { modalActions } from "./modal"

function defineAmount(){
  if (window.innerWidth < 767){
    return 1;
  }
  else if(window.innerWidth < 1279){
    return 2;
  }
  else { return 3; }
}

const insertionPlace = document.querySelector(".our-friends__carousel") as HTMLElement;
const itemsList = buildList(defineAmount());
const randomPets = Math.floor(Math.random() * itemsList.length);
let currentPosition: number;

export function carousel(p = randomPets){
  insertionPlace.innerHTML = "";
  itemsList[p].forEach(el => {
    insertionPlace?.appendChild(el);
    currentPosition = p;
  })
  modalActions();
}

const buttonPrev = document.querySelector("#button-left");
const buttonNext = document.querySelector("#button-right");

buttonPrev?.addEventListener("click", () => {
  if (currentPosition > 0){
    currentPosition--;
    carousel(currentPosition);
  } else {
    currentPosition = itemsList.length-1;
    carousel(currentPosition);
  }
})

buttonNext?.addEventListener("click", () => {
  if (currentPosition < itemsList.length-1){
    currentPosition++;
    carousel(currentPosition);
  } else {
    currentPosition = 0;
    carousel(currentPosition);
  }
})