const renderNavBar = (parentNode) => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'nav-bar');

  const getTabElement = (text) => {
    const linksEle = document.createElement('a');
    linksEle.setAttribute('href', `#${text}`);
    linksEle.setAttribute('class', 'tab-item');
    linksEle.innerHTML = text;
    return linksEle;
  };

  const menuTab = getTabElement('Menu');
  const bookingTab = getTabElement('Booking');
  const onlineOrderTab = getTabElement('Online Order');
  const contactTab = getTabElement('Contact');

  navBar.append(menuTab, bookingTab, onlineOrderTab, contactTab);
  parentNode.appendChild(navBar);
};

export default renderNavBar;