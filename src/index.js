//import "./style.css";
// uncomment for DIST !!!
import renderHome from './modules/home.js';

const tabController = (() => {
    const itemSelected = 'tab-item--selected';
    const contentSelected = 'tab-content--selected';

  const addEventListeners = () => {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((item) => item.addEventListener('click', chooseTab));
  };

  const chooseTab = (e) => {
    removeCurrentTab();
    addChosenTab(e);
  };

  const removeCurrentTab = () => {
    const item = document.querySelector('.' + itemSelected);
    if(item) item.classList.remove(itemSelected);
    const content = document.querySelector('.' + contentSelected);
    content.classList.remove(contentSelected);    
  };

  const addChosenTab = (e) => {
      const tabName = e.target.id.slice(5);
      const item = document.querySelector(`#item-${tabName}`);
      if(item) item.classList.add(itemSelected);
      const content = document.querySelector(`#${tabName}`);
      content.classList.add(contentSelected);
    };

  return { addEventListeners };
})();

renderHome();
tabController.addEventListeners();
