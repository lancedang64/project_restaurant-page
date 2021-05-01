const renderNavBar = (parentNode) => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'nav-bar');

  const getTabElement = (text) => {
    const linksEle = document.createElement('p');
    linksEle.setAttribute('id', `item-${text}`);
    linksEle.setAttribute('class', 'tab-item');
    linksEle.innerHTML = text;
    return linksEle;
  };

  const menuTab = getTabElement('menu');
  const bookingTab = getTabElement('booking');
  const contactTab = getTabElement('contact');
  const onlineOrderTab = getTabElement('online order');
  onlineOrderTab.setAttribute('id', 'item-online-order');

  const homeTab = document.createElement('img');
  homeTab.setAttribute('src', './images/logo-white.svg');
  homeTab.setAttribute('class', 'tab-item hidden');
  homeTab.setAttribute('id', 'item-logo');

  navBar.append(menuTab, bookingTab, homeTab, onlineOrderTab, contactTab);
  parentNode.appendChild(navBar);
};

export default renderNavBar;
