import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';
import food5 from '../images/food5.jpg';

const gallery = () => {
  const galleryTab = document.createElement('div');
  galleryTab.setAttribute('class', 'tab-content slideshow-content');
  galleryTab.setAttribute('id', 'gallery');

  const foodPic1 = document.createElement('img');
  const foodPic2 = document.createElement('img');
  const foodPic3 = document.createElement('img');
  const foodPic4 = document.createElement('img');
  const foodPic5 = document.createElement('img');
  foodPic1.setAttribute('class', 'food food-1');
  foodPic2.setAttribute('class', 'food food-2');
  foodPic3.setAttribute('class', 'food food-3');
  foodPic4.setAttribute('class', 'food food-4');
  foodPic5.setAttribute('class', 'food food-5');
  foodPic1.src = food1;
  foodPic2.src = food2;
  foodPic3.src = food3;
  foodPic4.src = food4;
  foodPic5.src = food5;

  galleryTab.append(
    foodPic1,
    foodPic2,
    foodPic3,
    foodPic4,
    foodPic5
  );

  const tabContentContainer = document.querySelector('.tab-content-container');
  tabContentContainer.append(galleryTab);
};

export { gallery };
