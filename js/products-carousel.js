(function() {

    const slides = [
        `<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>`,
        `<div><img src="img/banana.svg" alt="Banana"></div>`,
        `<div><img src="img/girl.svg" alt="Girl"></div>`,
        `<div><img src="img/viking.svg" alt="Viking"></div>`
    ]
    
    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-products__carousel .slide-container');
        slideContainer.innerHTML = slides[slideIdx];
        // if (window.innerWidth > 600) {
        if (window.matchMedia('(min-width: 600px)').matches) {
            const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.matchMedia('(min-width: 900px)').matches) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];    
            }
        }
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 3000);
    showCurrentSlide();

    const nextButton = document.querySelector('.main-products__carousel > .btn-next');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.main-products__carousel > .btn-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()