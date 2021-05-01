//import "./style.css";
// uncomment for DIST !!!
import renderHome from './modules/home.js';
renderHome();

const tabController = (() => {
  const itemSelected = 'tab-item--selected';
  const contentSelected = 'tab-content--selected';
  const itemLogo = document.querySelector('#item-logo');

  const addEventListeners = () => {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((item) => item.addEventListener('click', chooseTab));
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

  return { addEventListeners };
})();

tabController.addEventListeners();
