import { initLenis } from "@utils/lenis.ts";

const { gsap, ScrollTrigger } = initLenis();

gsap.registerPlugin(ScrollTrigger);

const stepsSection = document.querySelector("#steps") as HTMLElement;
const heroTitle = stepsSection.querySelector("h2") as HTMLHeadingElement;
const stepsContainer = stepsSection.querySelector("div") as HTMLDivElement;
const stepCards = stepsContainer.querySelectorAll("article");

// Configuración inicial - ocultar las tarjetas
gsap.set(stepsContainer, {
    transform: "translateY(calc(500px + 1rem))",
});

// Timeline principal
const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: stepsSection,
        start: "top top",
        end: "+=6000", // Ajusta este valor según la duración total deseada
        scrub: 1,
        pin: true,
        pinSpacing: true,
    },
});

// Fase 1: Animar el texto haciéndolo más grande
heroTimeline.to(
    heroTitle,
    {
        scale: 3,
        duration: 1,
        ease: "power2.inOut",
    },
    0
);

// Fase 2: Cambiar el fondo a negro
heroTimeline.to(
    stepsSection,
    {
        backgroundColor: "#000",
        duration: 0.5,
    },
    1 // Comienza después de que el texto se agrande
);

// Fase 3: Subir las tarjetas
heroTimeline.to(
    stepsContainer,
    {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.out",
    },
    1.5 // Comienza después del cambio de fondo
);

// Fase 4: Desplazamiento horizontal de las tarjetas
heroTimeline.to(
    stepsContainer,
    {
        x: `-${stepCards.length * 300}px`, // Calcula el desplazamiento total
        duration: 3,
        ease: "none",
    },
    2.5 // Comienza después de que suban las tarjetas
);

// Animar cada tarjeta individualmente para un efecto escalonado
stepCards.forEach((card, index) => {
    // Establecer la opacidad inicial a 0
    gsap.set(card, { opacity: 0 });

    // Animar cada tarjeta para que aparezca con un retardo progresivo
    heroTimeline.to(
        card,
        {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
        },
        2.5 + index * 0.2 // Retardo progresivo para cada tarjeta
    );
});
