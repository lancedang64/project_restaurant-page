const navBar = (parentNode) => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'nav-bar');

  const getTabElement = (text) => {
    const linksEle = document.createElement('a');
    linksEle.id = `item-${text}`;
    linksEle.classList.add('tab-item');
    linksEle.innerHTML = text;
    return linksEle;
  };

  const menuTab = getTabElement('menu');
  const contactTab = getTabElement('contact');

  const bookingTab = getTabElement('booking');
  bookingTab.href =
    'https://www.thefork.com.au/restaurant/armory-wharf-cafe-r558803';

  const onlineOrderTab = getTabElement('online order');
  //special case since online order is 2 words
  onlineOrderTab.id = 'item-onlineOrder';
  onlineOrderTab.href = 'https://armorywharfcafe.orderup.com.au/';

  const homeTab = document.createElement('span');
  homeTab.setAttribute('class', 'tab-item hidden');
  homeTab.id = 'item-logo';

  navBar.append(menuTab, bookingTab, homeTab, onlineOrderTab, contactTab);
  parentNode.appendChild(navBar);
};

export default navBar;
