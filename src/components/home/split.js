import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

export const runHomeAnimations = () => {
    document.fonts.ready.then(() => {
    gsap.set(".home__content", { opacity: 1 });
    let split = SplitText.create(".home__description", { type: "words", aria: "hidden" });

    gsap.from(split.words, {
        opacity: 0,
        duration: 2,
        ease: "sine.out",
        stagger: 0.1,
    });
    });
}

