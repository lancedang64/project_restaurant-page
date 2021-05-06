import navBar from './nav-bar.js';
import home from './home.js';
import footer from './footer.js';


const loadPage = () => {
  const contentDiv = document.querySelector('.content');

  const bgImageDiv = document.createElement('div');
  bgImageDiv.setAttribute('class', 'bg-image');
  contentDiv.appendChild(bgImageDiv);

  navBar(contentDiv);

  const tabContent = document.createElement('div');
  tabContent.setAttribute('class', 'tab-content-container');
  contentDiv.appendChild(tabContent);
  home(tabContent);

  footer(contentDiv);
};

export default loadPage;
