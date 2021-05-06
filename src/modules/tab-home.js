const renderHomeTab = (parentNode) => {
  const homeLogo = document.createElement('span');
  homeLogo.setAttribute(
    'class',
    'tab-content--selected tab-item--selected tab-item tab-content'
  );
  homeLogo.setAttribute('id', 'logo');
  parentNode.append(homeLogo);
};

export default renderHomeTab;
