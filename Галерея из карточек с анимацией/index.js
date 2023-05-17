function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active")

    for (const slide of slides) {
        slide.addEventListener("mouseover", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });

        slide.addEventListener("mouseout", () => {
            clearActiveClasses();
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

slidesPlugin(4);