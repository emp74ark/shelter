import { allItems, item } from "./resources";

function indexFromName(name: string){
  for (let i = 0; i < Object.keys(allItems).length; i++){
    if(allItems[i].name === name) return i;
  }
}

function modalWindow(name: string){
  
  const index = indexFromName(name)!;

  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal__wrapper");
  const modalButton = document.createElement("div");
  modalButton.classList.add("button__small-light");
  modalButton.innerHTML = "<h4>+</h4>";
  const modalCard = document.createElement("div");
  modalCard.classList.add("modal__card");
  const modalImage = document.createElement("img");
  modalImage.src = allItems[index].img
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__card-content");
  const modalTitle = document.createElement("h3");
  modalTitle.textContent = allItems[index].name;
  const modalType = document.createElement("div");
  modalType.textContent = allItems[index].type +" - "+ allItems[index].breed;
  modalType.classList.add("modal__card-type");
  const modalText = document.createElement("div");
  modalText.classList.add("modal__card-text");
  modalText.textContent = allItems[index].description;
  const modalUl = document.createElement("ul");
  const modalLi1 = document.createElement("li");
  modalLi1.innerHTML = `<b>Age:</b> ${allItems[index].age}`;
  const modalLi2 = document.createElement("li");
  modalLi2.innerHTML = `<b>Inoculations:</b> ${allItems[index].inoculations}`;
  const modalLi3 = document.createElement("li");
  modalLi3.innerHTML = `<b>Diseases:</b> ${allItems[index].diseases}`;
  const modalLi4 = document.createElement("li");
  modalLi4.innerHTML = `<b>Parasites:</b> ${allItems[index].parasites}`;

  modalUl.appendChild(modalLi1);
  modalUl.appendChild(modalLi2);
  modalUl.appendChild(modalLi3);
  modalUl.appendChild(modalLi4);

  modalText.appendChild(modalUl);
  
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalType);
  modalContent.appendChild(modalText);
  
  modalCard.appendChild(modalImage);
  modalCard.appendChild(modalContent);
  
  modalWrapper.appendChild(modalButton);
  modalWrapper.appendChild(modalCard);

  document.body.appendChild(modalWrapper);


  modalButton.addEventListener("click", () => {
    closeModal();
  })
}

function closeModal(){
  const clons = document.querySelectorAll(".modal__wrapper");
    for (const c of clons) { document.body.removeChild(c)}
    const shadow = document.querySelector(".shadow") as HTMLElement;
    shadow.classList.remove("shadow_active");
    document.body.style.overflow = "auto";
    const headerLight = document.querySelector(".header__light") as HTMLElement;
    headerLight.style.position = "sticky";
}

export function modalActions(){
  const infoButtons = document.querySelectorAll(".our-friends__card");
  infoButtons.forEach((el) => { 
    el.addEventListener("click", (el) => {
      const petCard = el.currentTarget as HTMLElement;
      const petName = petCard.childNodes[1].textContent;
      modalWindow(petName!);
      const shadow = document.querySelector(".shadow") as HTMLElement;
      shadow.classList.add("shadow_active");
      document.body.style.overflow = "hidden";
      const headerLight = document.querySelector(".header__light") as HTMLElement;
      headerLight.style.position = "static";
    })
  })
}