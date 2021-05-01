const renderHomeTab = (parentNode) => {
  const homeLogo = document.createElement('img');
  homeLogo.setAttribute('src', './images/logo-white.svg');
  homeLogo.setAttribute(
    'class',
    'tab-content--selected tab-item--selected tab-item tab-content'
  );
  homeLogo.setAttribute('id', 'logo');
  homeLogo.setAttribute('alt', 'logo');
  parentNode.append(homeLogo);
};

export default renderHomeTab;
