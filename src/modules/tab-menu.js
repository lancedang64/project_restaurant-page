const renderMenuTab = (parentNode) => {
  const menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'tab-content board-content');
  menuTab.setAttribute('id', 'menu');

  const menu1 = document.createElement('img');
  menu1.setAttribute('id', 'menu-1');
  menu1.setAttribute('class', 'menu-img');

  const menu2 = document.createElement('img');
  menu2.setAttribute('id', 'menu-2');
  menu2.setAttribute('class', 'menu-img hidden');

  const leftArrow = document.createElement('button');
  leftArrow.setAttribute('class', 'menu-arrow');
  leftArrow.setAttribute('id', 'left-arrow');
  leftArrow.innerHTML = '<';

  const rightArrow = document.createElement('button');
  rightArrow.setAttribute('class', 'menu-arrow');
  rightArrow.setAttribute('id', 'right-arrow');
  rightArrow.innerHTML = '>';

  menuTab.append(menu1, menu2, leftArrow, rightArrow);

  parentNode.append(menuTab);
};

export default renderMenuTab;
