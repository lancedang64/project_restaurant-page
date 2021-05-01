const renderBookingTab = (parentNode) => {
  const bookingTab = document.createElement('div');
  bookingTab.setAttribute('class', 'tab-content board-content');
  bookingTab.setAttribute('id', 'booking');



  parentNode.append(bookingTab);
};

export default renderBookingTab;