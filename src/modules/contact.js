const contact = () => {
  const contactTab = document.createElement('div');
  contactTab.setAttribute('class', 'tab-content board-content');
  contactTab.setAttribute('id', 'contact');

  const address = document.createElement('a');
  address.href =
    'https://maps.google.com/maps?q=13%2C+Blaxland+Riverside+Park+Jamieson+Street+Newington+NSW+2127';
  address.innerHTML = `<br>
  Building 13, <br>
  Blaxland Riverside Park <br>
  Jamieson Street <br>
  (off Holker Street) <br>
  Newington NSW 2127`;

  const phone = document.createElement('p');
  phone.innerHTML = '0423 884 801';

  const hours = document.createElement('p');
  hours.innerHTML = `Trading Hours <br>
  Tuesday-Friday 9am-2pm <br>
  Saturday & Sunday 8am-3pm <br>
  Monday Closed <br>
  Closed Public Holidays <br>
  All hours are weather permitting`;

  contactTab.append(address, phone, hours);

  const tabContentContainer = document.querySelector('.tab-content-container');
  tabContentContainer.appendChild(contactTab);
};

export default contact;
