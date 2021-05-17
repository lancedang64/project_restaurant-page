const linksTab = document.createElement('a');
linksTab.id = `item-links`;
linksTab.classList.add('tab-item--links');
linksTab.innerHTML = "links";

const onlineOrderTab = document.createElement('a');
onlineOrderTab.setAttribute('target' , '_blank');
onlineOrderTab.href = 'https://armorywharfcafe.orderup.com.au/';
onlineOrderTab.classList.add('links-menu--item');
onlineOrderTab.innerHTML = "online order";

const bookingTab = document.createElement('a');
bookingTab.setAttribute('target' , '_blank');
bookingTab.href =
  'https://www.thefork.com.au/restaurant/armory-wharf-cafe-r558803';
bookingTab.classList.add('links-menu--item');
bookingTab.innerHTML = "booking";

const linksMenu = document.createElement('div');
linksMenu.setAttribute('class', 'links-menu hidden');
linksMenu.append(onlineOrderTab, bookingTab);

linksTab.appendChild(linksMenu);

export { linksTab };
