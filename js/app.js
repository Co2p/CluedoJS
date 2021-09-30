window.addEventListener('load', () => setTheme(Cookies.get('theme')), false);

Array.from(document.getElementsByTagName("i")).forEach((e) => {
  e.addEventListener("click", (event) => {
    var currentIcon = event.currentTarget.innerHTML;
    var newIcon = ''
    if (currentIcon == 'remove_circle') {
      newIcon = 'radio_button_unchecked';
    } else if (currentIcon == 'radio_button_unchecked') {
      newIcon = 'check_circle';
    } else if (currentIcon == 'check_circle') {
      newIcon = 'add_circle';
    } else if (currentIcon == 'add_circle') {
      newIcon = 'remove_circle';
    }
    event.currentTarget.innerHTML = newIcon;
    Cookies.set(event.target.id, newIcon,  { expires: 60 });
    console.log(Cookies.get(event.target.id));
  })
})

window.onbeforeunload = function () {
  return "";
}

document.getElementById("fab").addEventListener("click", (e) => {
  if (document.getElementById("fabicon").textContent === 'visibility_off') {
    document.getElementById("tabContent").style = "display: none"
    document.getElementById("fabicon").textContent = 'visibility';
  } else {
    document.getElementById("tabContent").style = "display: block"
    document.getElementById("fabicon").textContent = 'visibility_off';
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`https://cluedo.co2p.se/sw.js`)
    .then(function (reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}
