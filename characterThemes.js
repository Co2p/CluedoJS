const themes = {
  "Mustard": [ "amber", "red" , "Colonel Mustard"],
  "Plum": [ "deep_purple", "pink", "Professor Plum"],
  "Green": [ "teal", "green", "Reverend Green"],
  "Peacock": [ "light_blue", "indigo", "Mrs Peacock"],
  "Scarlett": [ "red", "orange", "Miss Scarlett"],
  "White": [ "grey", "light_blue", "Mrs White"]
}

function setTheme(theme) {
  if (theme != undefined) {
    theme = themes[theme];
    console.log(theme);
    $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + theme[0] + '-' + theme[1] + '.min.css';
    $("#title")[0].innerHTML = theme[2];
    $("#mobilecolor")[0].content = 'mdl-color--' + theme[0];
  }
}

$('.set_character').click((e) => {
  setTheme(e.target.id);
  Cookies.set('theme', e.target.id, { expires: 60 });
  console.log(Cookies.get('theme'));
});
