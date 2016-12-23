const icons = ['radio_button_unchecked', 'check_circle', 'add_circle', 'remove_circle'];

window.addEventListener('load', init, false);

$('i').click((e) => {
  var currentIcon = e.currentTarget.innerHTML;
  if (currentIcon == icons[0]) {
    e.currentTarget.innerHTML = icons[1];
  } else if (currentIcon == icons[1]) {
    e.currentTarget.innerHTML = icons[2];
  } else if (currentIcon == icons[2]) {
    e.currentTarget.innerHTML = icons[3];
  } else if (currentIcon == icons[3]) {
    e.currentTarget.innerHTML = icons[0];
  }
});

function iconClick(e) {
  e = "'#" + e +"'";
  console.log($('#Mustard'));
  var currentIcon = $('#' + e).innerHTML;
  if (currentIcon == icons[0]) {
    $('#' + e).innerHTML = icons[1];
  } else if (currentIcon == icons[1]) {
    $('#' + e).innerHTML = icons[2];
  } else if (currentIcon == icons[2]) {
    $('#' + e).innerHTML = icons[3];
  } else if (currentIcon == icons[3]) {
    $('#' + e).innerHTML = icons[0];
  }
}

window.onbeforeunload = function() {
  return "";
}

function init() {
  () => setTheme(Cookies.get('theme'));
  //console.log($('#suspects'));
  $('#suspects').append("<ul class=\"demo-list-icon mdl-list\">" + createList("suspects") + "</ul>");
  // () => setProgress(Cookies.get('progress'));
}

$('.fab').click((e) => {
  $("#cardTabs").toggle();
  if ($('#fabicon')[0].textContent === 'visibility_off') {
    $('#fabicon')[0].textContent = 'visibility';
  } else {
    $('#fabicon')[0].textContent = 'visibility_off';
  }
});
