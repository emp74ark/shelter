import * as allItems from "../assets/pets.json";

export interface item {
  name: string,
  img: string,
  type: string,
  breed: string,
  description: string,
  age: string,
  inoculations: string[],
  diseases: string[],
  parasites: string[]
}

function buildItem(i: item){

  const itemCard = document.createElement("div");
  itemCard.classList.add("our-friends__card");
  const itemImg = document.createElement("img");
  itemImg.classList.add("our-friends__card-image");
  itemImg.src = i.img;
  const itemName = document.createElement("div");
  itemName.classList.add("card__name");
  itemName.textContent = i.name;
  const itemButton = document.createElement("div");
  itemButton.classList.add("button__big-light");
  itemButton.textContent = "Learn more";
  
  itemCard.appendChild(itemImg);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemButton);

  return itemCard;
}

export function buildList(n = Object.keys(allItems).length){
  const itemsList = [];
  
  let itemGroups: number;

  if (n === 1 || n%2 === 0){
    itemGroups = (Object.keys(allItems).length-1 )/n;
  } else {
    itemGroups = Math.ceil((Object.keys(allItems).length-1) / n);
  }
  
  for (let i=0; i<itemGroups; i++){
    itemsList.push([] as Array<HTMLElement>);
    for (let j=0+n*i; j<n+n*i; j++){
      if (allItems[j] !== undefined){
        itemsList[i].push(buildItem(allItems[j]));
      } else {
        itemsList[i].push(buildItem(allItems[Math.floor(Math.random()*(Object.keys(allItems).length - 1))]));
      }
    }
  }
  return itemsList;
}

export { allItems }