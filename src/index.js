import "./style.css";
// uncomment for DIST !!!
import loadPage from './modules/loadPage.js';
loadPage();

const tabController = (() => {
  const itemSelected = 'tab-item--selected';
  const contentSelected = 'tab-content--selected';
  const itemLogo = document.querySelector('#item-logo');

  const addEventListeners = () => {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((item) => item.addEventListener('click', chooseTab));

    const menuArrows = document.querySelectorAll('.menu-arrow');
    menuArrows.forEach((arrow) => arrow.addEventListener('click', switchMenu));
  };

  const chooseTab = (e) => {
    if (e.target.id === 'logo') return;
    e.target.id === 'item-logo' ? hideItemLogo() : showItemLogo();
    removeCurrentTab();
    addChosenTab(e);
  };

  const hideItemLogo = () => {
    itemLogo.classList.add('hidden');
  };

  const showItemLogo = () => {
    if (itemLogo.classList.contains('hidden'))
      itemLogo.classList.remove('hidden');
  };

  const removeCurrentTab = () => {
    const item = document.querySelector('.' + itemSelected);
    const content = document.querySelector('.' + contentSelected);
    item.classList.remove(itemSelected);
    content.classList.remove(contentSelected);
  };

  const addChosenTab = (e) => {
    const tabName = e.target.id.slice(5);
    const item = document.querySelector(`#item-${tabName}`);
    const content = document.querySelector(`#${tabName}`);
    item.classList.add(itemSelected);
    content.classList.add(contentSelected);
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

  return { addEventListeners };
})();

tabController.addEventListeners();
