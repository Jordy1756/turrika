export const initModal = (modalId: string, buttonSelector: string) => {
    const openModalButton = document.querySelectorAll(buttonSelector) as NodeListOf<HTMLButtonElement>;
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    const closeButton = modal.querySelector("header > button") as HTMLButtonElement;

    const openModal = () => modal.showModal();
    const closeModal = () => modal.close();

    openModalButton.forEach((button) => button.addEventListener("click", openModal));
    closeButton.addEventListener("click", closeModal);

    return { modal, openModal, closeModal };
};
