import { buildList } from "./resources";
import { modalActions } from "./modal";

const insertionPets = document.querySelector(".our-pets__wrapper") as HTMLElement;
const buttonFirst = document.querySelector("#button__first") as HTMLElement;
const buttonPrev = document.querySelector("#button__prev") as HTMLElement;
const buttonCurrent = document.querySelector("#button__current") as HTMLElement;
const buttonNext = document.querySelector("#button__next") as HTMLElement;
const buttonLast = document.querySelector("#button__last") as HTMLElement;

function petsAmount(){
  if (window.innerWidth < 767){
    return 3;
  }
  else if(window.innerWidth < 1279){
    return 6;
  }
  else { return 8; }
}

const petsList = buildList(petsAmount());

let currentPosition = 0;
buttonCurrent.textContent = (currentPosition + 1).toString();

function buttonStatus(){
  if (currentPosition === 0 && currentPosition !== petsList.length - 1){
    buttonPrev.classList.add("button__small-light_inactive");
    buttonFirst.classList.add("button__small-light_inactive");
    buttonNext.classList.remove("button__small-light_inactive");
    buttonLast.classList.remove("button__small-light_inactive");
  }
  if (currentPosition === petsList.length - 1 && currentPosition !== 0){
    buttonNext.classList.add("button__small-light_inactive");
    buttonLast.classList.add("button__small-light_inactive");
    buttonPrev.classList.remove("button__small-light_inactive");
    buttonFirst.classList.remove("button__small-light_inactive");
  }
  if (currentPosition > 0 && currentPosition < petsList.length - 1) {
    buttonFirst.classList.remove("button__small-light_inactive");
    buttonPrev.classList.remove("button__small-light_inactive");
    buttonNext.classList.remove("button__small-light_inactive");
    buttonLast.classList.remove("button__small-light_inactive");
  } 
  if (currentPosition === 0 && currentPosition === petsList.length - 1) {
    buttonPrev.classList.add("button__small-light_inactive");
    buttonFirst.classList.add("button__small-light_inactive");
    buttonNext.classList.add("button__small-light_inactive");
    buttonLast.classList.add("button__small-light_inactive");
  }
}

export function ourPets(p = currentPosition){
  petsList[p].forEach(el => {
    insertionPets?.appendChild(el);
  })
  buttonStatus();
  modalActions();
}

buttonFirst.addEventListener("click", () => {
  currentPosition = 0;
  insertionPets.innerHTML = "";
  ourPets();
  buttonCurrent.textContent = (currentPosition + 1).toString();
})
buttonPrev.addEventListener("click", () => {
  if (currentPosition > 0){
    currentPosition -= 1;
    insertionPets.innerHTML = "";
    ourPets();
    buttonCurrent.textContent = (currentPosition + 1).toString();
  } else {
    console.log("no more")
  }
})
buttonNext.addEventListener("click", () => {
  if (currentPosition < petsList.length-1){
    currentPosition += 1;
    insertionPets.innerHTML = "";
    ourPets();
    buttonCurrent.textContent = (currentPosition + 1).toString();
  } else {
    console.log("no more")
  }
})
buttonLast.addEventListener("click", () => {
  currentPosition = petsList.length-1;
  insertionPets.innerHTML = "";
  ourPets();
  buttonCurrent.textContent = (currentPosition + 1).toString();
})

ourPets();