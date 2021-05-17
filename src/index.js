import './style.css';
// uncomment for DIST !!!
// comment for SRC !!!
import loadPage from './modules/loadPage.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';
import home from './modules/home.js';
import { gallery } from './modules/gallery';
import { slideshow } from './modules/slideshow';

loadPage();

const tabController = (() => {
  const itemLogo = document.querySelector('#item-logo');
  const linksTab = document.querySelector('#item-links');
  const linksMenu = linksTab.querySelector('.links-menu');

  const addEventListeners = () => {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((item) => item.addEventListener('click', chooseTab));

    const linksItem = document.querySelector('.tab-item--links');
    linksItem.addEventListener('click', showLinksMenu);
    linksItem.addEventListener('mouseover', showLinksMenu);
    linksItem.addEventListener('mouseout', hideLinksMenu);
  };

  const chooseTab = (e) => {
    const tabName = e.target.id.slice(5);
    tabName === 'logo' ? hideItemLogo() : showItemLogo();
    removeCurrentTab();
    changeTabItem(tabName);
    renderChosenTab(tabName);
  };

  const hideItemLogo = () => {
    itemLogo.classList.add('hidden');
  };

  const showItemLogo = () => {
    if (itemLogo.classList.contains('hidden'))
      itemLogo.classList.remove('hidden');
  };

  const removeCurrentTab = () => {
    const item = document.querySelector('.' + 'tab-item--selected');
    const content = document.querySelector('.tab-content');
    item.classList.remove('tab-item--selected');
    if (content) content.remove();
  };

  const changeTabItem = (tabName) => {
    const item = document.querySelector(`#item-${tabName}`);
    item.classList.add('tab-item--selected');
  };

  const renderChosenTab = (tabName) => {
    if (tabName === 'menu') openMenuTab();
    if (tabName === 'gallery') openGalleryTab();
    if (tabName === 'contact') contact();
    if (tabName === 'logo') home();
  };

  const openGalleryTab = () => {
    gallery();
    slideshow.initSlide();
  };

  const openMenuTab = () => {
    menu();
    addMenuListeners();
  };

  const addMenuListeners = () => {
    const menuArrows = document.querySelectorAll('.menu-arrow');
    menuArrows.forEach((arrow) => arrow.addEventListener('click', switchMenu));
  };

  const switchMenu = () => {
    const nextMenu = document.querySelector('.menu-img.hidden');
    const prevMenu =
      nextMenu.id === 'menu-1'
        ? document.querySelector('#menu-2')
        : document.querySelector('#menu-1');
    nextMenu.classList.remove('hidden');
    prevMenu.classList.add('hidden');
  };

  const showLinksMenu = (e) => {
    linksMenu.classList.remove('hidden');
  };

  const hideLinksMenu = (e) => {
    linksMenu.classList.add('hidden');
  };

  return { addEventListeners };
})();

tabController.addEventListeners();
