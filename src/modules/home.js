const home = () => {
  const tabContent = document.querySelector('.content');

  const homeLogo = document.createElement('span');
  homeLogo.setAttribute(
    'class',
    'tab-item--selected tab-item tab-content'
  );
  homeLogo.setAttribute('id', 'logo');
  tabContent.append(homeLogo);
};

export default home;
