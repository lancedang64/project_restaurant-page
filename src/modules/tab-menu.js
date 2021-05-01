const renderMenuTab = (parentNode) => {
  const menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'tab-content board-content');
  menuTab.setAttribute('id', 'menu');



  parentNode.append(menuTab);
};

export default renderMenuTab;
