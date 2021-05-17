const gallery = () => {
  const galleryTab = document.createElement('div');
  galleryTab.setAttribute('class', 'tab-content slideshow-content');
  galleryTab.setAttribute('id', 'gallery');

  const food1 = document.createElement('img');
  food1.setAttribute('class', 'food food-1');

  const food2 = document.createElement('img');
  food2.setAttribute('class', 'food food-2');

  const food3 = document.createElement('img');
  food3.setAttribute('class', 'food food-3');

  const food4 = document.createElement('img');
  food4.setAttribute('class', 'food food-4');

  const food5 = document.createElement('img');
  food5.setAttribute('class', 'food food-5');

  const leftArrow = document.createElement('button');
  leftArrow.setAttribute('class', 'menu-arrow');
  leftArrow.setAttribute('id', 'left-arrow');
  leftArrow.innerHTML = '<';

  const rightArrow = document.createElement('button');
  rightArrow.setAttribute('class', 'menu-arrow');
  rightArrow.setAttribute('id', 'right-arrow');
  rightArrow.innerHTML = '>';

  galleryTab.append(food1, food2, food3, food4, food5, leftArrow, rightArrow);

  const tabContentContainer = document.querySelector('.tab-content-container');
  tabContentContainer.append(galleryTab);
};

export { gallery };
