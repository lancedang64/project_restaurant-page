// import "./style.css";
// uncomment for DIST !!!
// comment for SRC !!!
import loadPage from './modules/loadPage.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';
import home from './modules/home.js'
loadPage();

const tabController = (() => {
  const itemSelected = 'tab-item--selected';
  const contentSelected = 'tab-content';
  const itemLogo = document.querySelector('#item-logo');

  const addEventListeners = () => {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((item) => item.addEventListener('click', chooseTab));
  };

  const chooseTab = (e) => {
    if (e.target.id === 'logo') return;
    e.target.id === 'item-logo' ? hideItemLogo() : showItemLogo();
    removeCurrentTab();
    changeTabItem(e);
    renderChosenTab(e);
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
    const content = document.querySelector('.tab-content');
    item.classList.remove(itemSelected);
    if (content) content.remove();
  };

  const changeTabItem = (e) => {
    const tabName = e.target.id.slice(5);
    const item = document.querySelector(`#item-${tabName}`);
    item.classList.add(itemSelected);
  };

  const renderChosenTab = (e) => {
    const tabName = e.target.id.slice(5);
    if (tabName === 'menu') {
      menu();
      addMenuListeners();
    }
    if (tabName === 'contact') contact();
    if (tabName === 'logo') home();
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

  return { addEventListeners };
})();

tabController.addEventListeners();
