// const ICON_TYPES = {
//     success: `
//         <svg width="24" height="24" viewBox="0 0 512 512">
//             <path
//                 fill="var(--success-500)"
//                 fill-rule="evenodd"
//                 d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
//             ></path>
//         </svg>
//     `,
//     error: `
//         <svg width="24" height="24" viewBox="0 0 512 512">
//             <path
//                 fill="var(--error-500)"
//                 fill-rule="evenodd"
//                 d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m0 42.667c-94.1 0-170.666 76.565-170.666 170.666c0 94.102 76.565 170.667 170.666 170.667c94.102 0 170.667-76.565 170.667-170.667c0-94.101-76.565-170.666-170.667-170.666m48.918 91.584l30.165 30.165L286.166 256l48.917 48.918l-30.165 30.165L256 286.166l-48.917 48.917l-30.165-30.165L225.835 256l-48.917-48.917l30.165-30.165L256 225.835z"
//             ></path>
//         </svg>
//     `,
// };

// export const initToast = () => {
//     const toast = document.querySelector(".toast") as HTMLDivElement;
//     const toastMainSection = toast.querySelector("div > section") as HTMLElement;
//     const toastIcon = toast.querySelector("aside") as HTMLElement;
//     const toastTitle = toast.querySelector("div > header > h6") as HTMLHeadingElement;
//     const toastText = toastMainSection.querySelector("p") as HTMLParagraphElement;
//     const toastCloseButton = toast.querySelector("div > header > button") as HTMLButtonElement;

//     const showToast = (type: "success" | "error", title: string, message: string) => {
//         toast.classList.add("active", `toast__${type}`);
//         toastIcon.innerHTML = ICON_TYPES[type];
//         toastTitle.textContent = title;
//         toastText.textContent = message;

//         setTimeout(closeToast, 7800);
//     };

//     const closeToast = () => {
//         toast.classList.remove("active");
//         toastIcon.innerHTML = "";
//         toastTitle.textContent = "";
//         toastText.textContent = "";
//     };

//     toastCloseButton.addEventListener("click", closeToast);

//     return { showToast, closeToast };
// };
