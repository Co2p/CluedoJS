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
  $("#title")[0].innerHTML = 'Colonel Mustard';
  $("#mobilecolor")[0].content = '#FF9800';
});

$('#ProfessorPlum').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.deep_purple-red.min.css';
  $("#title")[0].innerHTML = 'Professor Plum';
  $("#mobilecolor")[0].content = '#673AB7';
});

$('#ReverendGreen').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.teal-green.min.css';
  $("#title")[0].innerHTML = 'Reverend Green';
});

$('#MrsPeacock').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.light_blue-indigo.min.css';
  $("#title")[0].innerHTML = 'Mrs Peacock';
});

$('#MissScarlett').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.red-orange.min.css';
  $("#title")[0].innerHTML = 'Miss Scarlett';
});

$('#MrsWhite').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.grey-light_blue.min.css';
  $("#title")[0].innerHTML = 'Mrs White';
});

$('.fab').click((e) => {
  $("#cardTabs").toggle();
  if ($('#fabicon')[0].textContent === 'visibility_off') {
    $('#fabicon')[0].textContent = 'visibility';
  } else {
    $('#fabicon')[0].textContent = 'visibility_off';
  }
});
