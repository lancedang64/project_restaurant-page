const slideshow = (() => {
  let slideIndex = 0;
  let foodIMG;

  const carousel = () => {
    foodIMG = document.querySelectorAll('.food');
    if (foodIMG.length === 0) return;
    foodIMG.forEach((food) => food.classList.add('hidden'));
    slideIndex++;
    if (slideIndex > foodIMG.length) slideIndex = 1;
    showSlide(slideIndex - 1);
    setTimeout(carousel, 4000);
  };

  // TODO: these functions throw error sometimes and behave not as wanted :(
  const showSlide = (slideIndex) => {
    foodIMG[slideIndex].classList.remove('hidden');
  };

  const hideSlide = (slideIndex) => {
    foodIMG[slideIndex].classList.add('hidden');
  };

  const showPrevious = (e) => {
    hideSlide(slideIndex);
    slideIndex = slideIndex - 1;
    if (slideIndex < 0) slideIndex = foodIMG.length - 1;
    showSlide(slideIndex);
  };

  const showNext = (e) => {
    hideSlide(slideIndex);
    slideIndex = slideIndex + 1;
    if (slideIndex === foodIMG.length) slideIndex = 0;
    showSlide(slideIndex);
  };

  return { carousel, showNext, showPrevious };
})();

export { slideshow };
