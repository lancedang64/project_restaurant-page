import { linksTab } from './linksTab';

const navBar = (parentNode) => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('class', 'nav-bar');

  const getTabElement = (text) => {
    const linksEle = document.createElement('a');
    linksEle.id = `item-${text}`;
    linksEle.classList.add('tab-item');
    linksEle.innerHTML = text;
    return linksEle;
  };

  const menuTab = getTabElement('menu');
  const contactTab = getTabElement('contact');
  const galleryTab = getTabElement('gallery');

  const homeTab = document.createElement('span');
  homeTab.setAttribute('class', 'tab-item hidden');
  homeTab.id = 'item-logo';

  navBar.append(menuTab, galleryTab, homeTab, linksTab, contactTab);
  parentNode.appendChild(navBar);
};

export default navBar;
