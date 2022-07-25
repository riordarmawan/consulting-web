// Notification Button
function slideUp(el) {
  var elem = document.getElementById(el);
  elem.style.transition = 'all 2s ease-out';
  elem.style.height = '0px';
}

// Newslatter Close Button
function slideDown(el) {
  var elem = document.getElementById(el);
  elem.style.transition = 'all 2s ease-in-out';
  elem.style.height = '0px';
}
