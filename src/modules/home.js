import renderNavBar from "./nav-bar.js";
import renderHomeTab from "./home-tab.js";
import renderFooter from "./footer.js";

const renderHome = () => {
  const contentDiv = document.querySelector('.content');

  const bgImageDiv = document.createElement('div');
  bgImageDiv.setAttribute('class', 'bg-image');
  contentDiv.appendChild(bgImageDiv);

  renderNavBar(contentDiv);

  const tabContent = document.createElement('div');
  tabContent.setAttribute('class', 'tab-content');
  contentDiv.appendChild(tabContent);
  renderHomeTab(tabContent);

  renderFooter(contentDiv);
};

export default renderHome;
