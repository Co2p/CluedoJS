$('i').click((e) => {
  var currentIcon = e.currentTarget.innerHTML;
  if (currentIcon == 'check_box_outline_blank') {
    e.currentTarget.innerHTML = 'help';
  } else if (currentIcon == 'help') {
    e.currentTarget.innerHTML = 'check_box';
  } else if (currentIcon == 'check_box') {
    e.currentTarget.innerHTML = 'check_box_outline_blank';
  }
});

window.onbeforeunload = function() {
  return "";
}

$('.fab').click((e) => {
  $("#cardTabs").toggle();
  if ($('#fabicon')[0].textContent === 'visibility_off') {
    $('#fabicon')[0].textContent = 'visibility';
  } else {
    $('#fabicon')[0].textContent = 'visibility_off';
  }
});
