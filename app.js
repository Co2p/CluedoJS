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

$('#ColonelMustard').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.amber-red.min.css';
});

$('#ProfessorPlum').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.deep_purple-red.min.css';
});

$('#ReverendGreen').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.green-light_green.min.css';
});

$('#MrsPeacock').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.light_blue-indigo.min.css';
});

$('#MissScarlett').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.red-orange.min.css';
});

$('#MrsWhite').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.grey-light_blue.min.css';
});
