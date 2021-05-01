const renderFooter = (parentNode) => {
  const footer = document.createElement('footer');
  const footerContent = document.createElement('div');
  footerContent.setAttribute('class', 'footer-content');
  footerContent.innerHTML = 'Made by Lance Dang';
  footer.append(footerContent);
  parentNode.appendChild(footer);
};

export default renderFooter;