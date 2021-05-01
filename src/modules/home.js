import renderNavBar from './nav-bar.js';
import renderHomeTab from './tab-home.js';
import renderFooter from './footer.js';
import renderMenuTab from './tab-menu.js';
import renderBookingTab from './tab-booking.js';
import renderOrderTab from './tab-online-order.js';
import renderContactTab from './tab-contact.js';

const loadPage = () => {
  const contentDiv = document.querySelector('.content');

  const bgImageDiv = document.createElement('div');
  bgImageDiv.setAttribute('class', 'bg-image');
  contentDiv.appendChild(bgImageDiv);

  renderNavBar(contentDiv);

  const tabContent = document.createElement('div');
  tabContent.setAttribute('class', 'tab-content-container');
  contentDiv.appendChild(tabContent);
  renderHomeTab(tabContent);
  renderMenuTab(tabContent);
  renderBookingTab(tabContent);
  renderOrderTab(tabContent);
  renderContactTab(tabContent);

  renderFooter(contentDiv);
};

export default loadPage;