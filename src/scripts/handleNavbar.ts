const header = document.querySelector("#header") as HTMLElement;
const openNavbarBtn = header.querySelector("#open-navbar-btn") as HTMLButtonElement;
const closeNavbarBtn = header.querySelector("#close-navbar-btn") as HTMLButtonElement;
const overlay = header.querySelector("#overlay") as HTMLButtonElement;

openNavbarBtn.addEventListener("click", () => {
    header.classList.toggle("navbar__open");
});

closeNavbarBtn.addEventListener("click", () => {
    header.classList.toggle("navbar__open");
});

overlay.addEventListener("click", () => {
    header.classList.toggle("navbar__open");
});
