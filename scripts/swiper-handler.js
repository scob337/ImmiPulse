document.addEventListener('DOMContentLoaded', () => {
    // Slider 1 - Need Help Moving To Chile
    const sliderContainer1 = document.querySelector('.slider-container');
    const slides1 = document.querySelectorAll('.slide');
    const prevButton1 = document.querySelector('.prev');
    const nextButton1 = document.querySelector('.next');

    let currentIndex1 = 0;
    let slideWidth1 = 350;  // Width of each slide
    let slideGap1 = 20;     // Initial gap between slides
    const totalSlides1 = slides1.length;

    const updateSliderPosition1 = () => {
        const containerWidth1 = sliderContainer1.parentElement.clientWidth;

        // Update slide gap based on device width
        slideGap1 = window.innerWidth > 500 ? 35 : 20;
        slideWidth1 = window.innerWidth > 410 ? 350 : 288;

        if (containerWidth1 > 1680) {
            // Reduce opacity of navigation arrows and stop sliding
            prevButton1.style.opacity = '0.5';
            nextButton1.style.opacity = '0.5';
            sliderContainer1.style.transform = 'translateX(0px)';
            return;
        }

        const visibleSlidesCount1 = Math.floor(containerWidth1 / (slideWidth1 + slideGap1));
        let maxIndex1 = totalSlides1 - visibleSlidesCount1;

        // If last slide doesn't fully fit, adjust maxIndex further
        const remainingSpace1 = containerWidth1 - (visibleSlidesCount1 * (slideWidth1 + slideGap1) - slideGap1);
        if (remainingSpace1 < (slideWidth1 + slideGap1)) {
            maxIndex1 = totalSlides1 - visibleSlidesCount1;
        }

        currentIndex1 = Math.min(currentIndex1, maxIndex1);

        // Update button opacity and visibility
        sliderContainer1.style.transform = `translateX(${-currentIndex1 * (slideWidth1 + slideGap1)}px)`;

        // Update button opacity
        prevButton1.style.opacity = currentIndex1 > 0 ? '1' : '0.5';
        // prevButton1.style.visibility = currentIndex1 > 0 ? 'visible' : 'hidden'; // Uncomment to hide button when not needed

        nextButton1.style.opacity = currentIndex1 < maxIndex1 ? '1' : '0.5';
        // nextButton1.style.visibility = currentIndex1 < maxIndex ? 'visible' : 'hidden'; // Uncomment to hide button when not needed

    };

    const goToNextSlide1 = () => {
        const containerWidth1 = sliderContainer1.parentElement.clientWidth;
        const visibleSlidesCount1 = Math.floor(containerWidth1 / (slideWidth1 + slideGap1));
        const maxIndex1 = totalSlides1 - visibleSlidesCount1;
        currentIndex1 = Math.min(currentIndex1 + 1, maxIndex1);  // Navigate one slide at a time
        updateSliderPosition1();
    };

    const goToPrevSlide1 = () => {
        currentIndex1 = Math.max(currentIndex1 - 1, 0);  // Navigate one slide at a time
        updateSliderPosition1();
    };

    prevButton1.addEventListener('click', goToPrevSlide1);
    nextButton1.addEventListener('click', goToNextSlide1);

    window.addEventListener('resize', updateSliderPosition1);

    // Initial update to set the correct slider position and button visibility
    updateSliderPosition1();


    // Slider 2 - Reviews Slider
    const reviewSliderContainer = document.querySelector('.review-slider-container');
    const reviewSlides = document.querySelectorAll('.review-slide');
    const prevReviewButton = document.querySelector('.prev-review');
    const nextReviewButton = document.querySelector('.next-review');

    let reviewCurrentIndex = 0;
    const reviewSlideGap = 20;     // Gap between slides
    const totalReviewSlides = reviewSlides.length;

    const updateReviewSliderPosition = () => {
        const containerWidth = reviewSliderContainer.parentElement.clientWidth;
        let reviewSlideWidth;
        let visibleSlidesCount;

        // Determine slide width and visible slides count based on screen width
        if (window.innerWidth < 1090) {
            // Below 1090px - show one slide that takes full container width
            reviewSlideWidth = containerWidth;
            visibleSlidesCount = 1;
        } else {
            // Above 1090px - show multiple slides
            reviewSlideWidth = 720; // Default width for larger screens
            visibleSlidesCount = Math.floor(containerWidth / (reviewSlideWidth + reviewSlideGap));
        }

        const maxIndex = totalReviewSlides - visibleSlidesCount;
        reviewCurrentIndex = Math.min(reviewCurrentIndex, maxIndex);

        // Update slider position
        reviewSliderContainer.style.transform = `translateX(${-reviewCurrentIndex * (reviewSlideWidth + reviewSlideGap)}px)`;

        // Update button opacity and visibility
        prevReviewButton.style.opacity = reviewCurrentIndex > 0 ? '1' : '0.5';
        // prevReviewButton.style.visibility = reviewCurrentIndex > 0 ? 'visible' : 'hidden'; // Uncomment to hide button when not needed

        nextReviewButton.style.opacity = reviewCurrentIndex < maxIndex ? '1' : '0.5';
        // nextReviewButton.style.visibility = reviewCurrentIndex < maxIndex ? 'visible' : 'hidden'; // Uncomment to hide button when not needed

        // Update individual slide widths
        reviewSlides.forEach(slide => {
            slide.style.width = `${reviewSlideWidth}px`;
        });
    };

    const goToNextReviewSlide = () => {
        const visibleSlidesCount = window.innerWidth < 1090 ? 1 : Math.floor(reviewSliderContainer.parentElement.clientWidth / (720 + reviewSlideGap));
        const maxIndex = totalReviewSlides - visibleSlidesCount;
        reviewCurrentIndex = Math.min(reviewCurrentIndex + 1, maxIndex);
        updateReviewSliderPosition();
    };

    const goToPrevReviewSlide = () => {
        reviewCurrentIndex = Math.max(reviewCurrentIndex - 1, 0);
        updateReviewSliderPosition();
    };

    // Add event listeners
    prevReviewButton.addEventListener('click', goToPrevReviewSlide);
    nextReviewButton.addEventListener('click', goToNextReviewSlide);
    window.addEventListener('resize', updateReviewSliderPosition);

    // Initial update
    updateReviewSliderPosition();
});