const footer = (parentNode) => {
  const footer = document.createElement('footer');
  const footerContent = document.createElement('span');
  const gitHubLogo = document.createElement('a');
  const copyright = document.createElement('p');

  footerContent.setAttribute('class', 'footer-content');
  footerContent.innerHTML = 'Made by Lance Dang';

  gitHubLogo.setAttribute('id', 'github-logo');
  gitHubLogo.setAttribute('href', 'https://github.com/lancedang64');

  copyright.innerHTML = `All images, logos used in this personal project belong to <a href='http://www.armorywharfcafe.com/' , id='shop'>Armory Wharf Cafe</a> <br> Thanks Chloe for your permission!`;

  footer.append(footerContent, gitHubLogo, copyright);

  parentNode.appendChild(footer);
};

export default footer;
