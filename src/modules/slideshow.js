const slideshow = (() => {
  let slideIndex = 0;
  let foodIMG;

  const initSlide = () => {
    foodIMG = document.querySelectorAll('.food');
    foodIMG.forEach((food) => food.classList.add('hidden'));
    showSlide(slideIndex);
    slideIndex++;
    if (slideIndex === foodIMG.length) slideIndex = 0;
    setTimeout(initSlide, 2000);
  };

  const showSlide = (index) => {
    foodIMG[index].classList.remove('hidden');
  };

  const hideSlide = (index) => {
    foodIMG[index].classList.add('hidden');
  };

  return { initSlide };
})();

export { slideshow };
