const renderOrderTab = (parentNode) => {
    const orderTab = document.createElement('div');
    orderTab.setAttribute('class', 'tab-content board-content');
    orderTab.setAttribute('id', 'online-order');
  
  
  
    parentNode.append(orderTab);
  };
  
  export default renderOrderTab;