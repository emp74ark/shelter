const burgerButton = document.querySelector(".burger__button") as HTMLElement;
const burgerMenu = document.querySelector(".burger__menu") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLElement;
const shadow = document.querySelector(".shadow") as HTMLElement;
const headerLight = document.querySelector(".header__light") as HTMLElement;

function openBurger() {
  burgerButton.classList.toggle("burger__button_active");
  burgerMenu.classList.toggle("burger__menu_active");
  if(burgerMenu.classList.contains("burger__menu_active")){
    document.body.style.overflow = "hidden"
    logo.style.display = "none";
    if(burgerButton.classList.contains("burger__button_dark")){
      burgerButton.classList.toggle("burger__button_color");
      headerLight.style.position = "static";
    }
  } else {
    logo.style.display = "block";
    document.body.style.overflow = "auto";
    if(burgerButton.classList.contains("burger__button_dark")){
      burgerButton.classList.toggle("burger__button_color");
      headerLight.style.position = "sticky";
    }
  }

  shadow.classList.toggle("shadow_active");
}

export function burger(){
  burgerButton?.addEventListener("click", () => {openBurger()})
}