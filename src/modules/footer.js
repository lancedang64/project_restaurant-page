const footer = (parentNode) => {
  const footer = document.createElement('footer');
  const footerContent = document.createElement('span');
  const gitHubLogo = document.createElement('a');

  footerContent.setAttribute('class', 'footer-content');
  footerContent.innerHTML = 'Made by Lance Dang';

  gitHubLogo.setAttribute('id', 'github-logo');
  gitHubLogo.setAttribute('href', 'https://github.com/lancedang64');

  footer.append(footerContent, gitHubLogo);

  parentNode.appendChild(footer);
};

export default footer;
