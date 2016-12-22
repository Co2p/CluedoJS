$('i').click((e) => {
  var currentIcon = e.currentTarget.innerHTML;
  if (currentIcon == 'check_box_outline_blank') {
    e.currentTarget.innerHTML = 'help';
  } else if (currentIcon == 'check_box') {
    e.currentTarget.innerHTML = 'check_box_outline_blank';
  } else if (currentIcon == 'help') {
    e.currentTarget.innerHTML = 'check_box';
  }
});
