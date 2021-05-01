const renderHomeTab = (parentNode) => {
  const homeLogo = document.createElement('img');
  homeLogo.setAttribute('src', './images/logo-white.svg');
  homeLogo.setAttribute('class', 'tab-item--home--selected home-screen--logo');
  homeLogo.setAttribute('alt', 'logo');
  parentNode.append(homeLogo);
};

export default renderHomeTab;