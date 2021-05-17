const home = () => {
  const homeLogo = document.createElement('span');
  homeLogo.setAttribute(
    'class',
    'tab-item--selected tab-item tab-content'
  );
  homeLogo.setAttribute('id', 'logo');
  const tabContentContainer = document.querySelector('.tab-content-container');
  tabContentContainer.append(homeLogo);
};

export default home;
