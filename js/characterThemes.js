const themes = {
  "Default": {"primary": "#607d8b", "accent": "#f44336", "name": "Default"},
  "Mustard": { "primary": "#ffc107", "accent": "#f44336" , "name": "Colonel Mustard"},
  "Plum": { "primary": "#673ab7", "accent": "#e91e63", "name": "Professor Plum"},
  "Green": { "primary": "#009688", "accent": "#4caf50", "name": "Reverend Green"},
  "Peacock": { "primary": "#03a9f4", "accent": "#3f51b5", "name": "Mrs Peacock"},
  "Scarlett": { "primary": "#f44336", "accent": "#ff9800", "name": "Miss Scarlett"},
  "White": { "primary": "#9e9e9e", "accent": "#03a9f4", "name": "Mrs White"}
}

function setTheme(theme) {
  if (theme != undefined) {
    theme = themes[theme];
    document.documentElement.style.setProperty("--color-accent", theme.accent);
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.getElementById("title").innerHTML = theme.name;
    document.getElementById("mobilecolor").content = 'mdl-color--' + theme.primary;
  }
}

Array.from(document.getElementsByClassName("set_character")).forEach(e => {
  e.addEventListener("click", (event) => {
    setTheme(event.target.id);
    Cookies.set('theme', event.target.id, { expires: 60 });
    console.log(Cookies.get('theme'));
  })
});