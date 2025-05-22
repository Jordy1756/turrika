export const initHeader = () => {
    const header = document.querySelector("#header") as HTMLElement;
    const openNavbarBtn = header.querySelector("#open-navbar-btn") as HTMLButtonElement;
    const closeNavbarBtn = header.querySelector("#close-navbar-btn") as HTMLButtonElement;
    const overlay = header.querySelector("#overlay") as HTMLButtonElement;

    const toggleNavbarOpen = () => header.classList.toggle("navbar__open");

    openNavbarBtn.addEventListener("click", toggleNavbarOpen);
    closeNavbarBtn.addEventListener("click", toggleNavbarOpen);
    overlay.addEventListener("click", toggleNavbarOpen);
};
