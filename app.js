window.addEventListener('load', () => setTheme(Cookies.get('theme')), false);

$('i').click((e) => {
  var currentIcon = e.currentTarget.innerHTML;
  if (currentIcon == 'remove_circle') {
    e.currentTarget.innerHTML = 'radio_button_unchecked';
  } else if (currentIcon == 'radio_button_unchecked') {
    e.currentTarget.innerHTML = 'check_circle';
  } else if (currentIcon == 'check_circle') {
    e.currentTarget.innerHTML = 'add_circle';
  } else if (currentIcon == 'add_circle') {
    e.currentTarget.innerHTML = 'remove_circle';
  }
});

window.onbeforeunload = function() {
  return "";
}

$('.fab').click((e) => {
  $("#tabContent").toggle();
  $("#tabs").toggle();
  $("#hidden").toggle();
  if ($('#fabicon')[0].textContent === 'visibility_off') {
    $('#fabicon')[0].textContent = 'visibility';
  } else {
    $('#fabicon')[0].textContent = 'visibility_off';
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/CluedoCardJS/sw.js')
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
