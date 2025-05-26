import { USER_API_URL } from "@constants/apiConstant";
import { ApiError } from "@utils/apiError";

const insertUserService = async (email: string) => {
    const response = await fetch(`${USER_API_URL}/register-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};

const insertUser = async (
    e: SubmitEvent,
    newsletterForm: HTMLFormElement,
    showToast: (type: "success" | "error", title: string, message: string) => void
) => {
    e.preventDefault();

    const { email } = Object.fromEntries(new FormData(newsletterForm).entries());
    try {
        await insertUserService(email + "");
        showToast("success", "Registrado", "Te enviaremos recestas semanalmente");
    } catch (error: any) {
        showToast("error", error.name, error.message);
    }
};

export const initNewsletterForm = (showToast: (type: "success" | "error", title: string, message: string) => void) => {
    const newsletterForms = document.querySelectorAll(".newsletter__form") as NodeListOf<HTMLFormElement>;

    newsletterForms.forEach((newsletterForm) => {
        newsletterForm.addEventListener("submit", async (e) => insertUser(e, newsletterForm, showToast));
    });
};
