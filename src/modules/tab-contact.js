const renderContactTab = (parentNode) => {
  const contactTab = document.createElement('div');
  contactTab.setAttribute('class', 'tab-content board-content');
  contactTab.setAttribute('id', 'contact');

  parentNode.append(contactTab);
};

export default renderContactTab;
