const themes = {
  "Mustard": { "primary": "amber", "secondary": "red" , "name": "Colonel Mustard"},
  "Plum": { "primary": "deep_purple", "secondary": "pink", "name": "Professor Plum"},
  "Green": { "primary": "teal", "secondary": "green", "name": "Reverend Green"},
  "Peacock": { "primary": "light_blue", "secondary": "indigo", "name": "Mrs Peacock"},
  "Scarlett": { "primary": "red", "secondary": "orange", "name": "Miss Scarlett"},
  "White": { "primary": "grey", "secondary": "light_blue", "name": "Mrs White"}
}

function setTheme(theme) {
  if (theme != undefined) {
    theme = themes[theme];
    $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + theme.primary + '-' + theme.secondary + '.min.css';
    $("#title")[0].innerHTML = theme.name;
    $("#mobilecolor")[0].content = 'mdl-color--' + theme.primary;
  }
}

$('.set_character').click((e) => {
  setTheme(e.target.id);
  Cookies.set('theme', e.target.id, { expires: 60 });
  console.log(Cookies.get('theme'));
});
