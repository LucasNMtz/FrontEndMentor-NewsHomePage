const dropdownMenu = document.querySelector(".nav-dropdown-menu");
const dropdownMenuButton = document.querySelector(".dropdown-menu-button");
const dropdownMenuButtonIMG = document.querySelector(".dropdown-menu-button-img");
const logo = document.querySelector(".logo-container");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

dropdownMenuButton.addEventListener("click", () => {
    let isActive = dropdownMenu.classList.contains("active");

    dropdownMenu.classList.toggle("nav-dropdown-menu-active");

    logo.classList.toggle("dropdown-active");
    main.classList.toggle("dropdown-active");
    footer.classList.toggle("dropdown-active");

    if (!isActive) dropdownMenuButtonIMG.src = dropdownMenuButtonIMG.src.replace("-menu.svg", "-menu-close.svg");
    else dropdownMenuButtonIMG.src = dropdownMenuButtonIMG.src.replace("-menu-close.svg", "-menu.svg");

    dropdownMenu.classList.toggle("active");
})