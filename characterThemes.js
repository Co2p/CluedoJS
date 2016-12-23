const MustardPrimary = 'amber';
const MustardSecondary = 'red';
const PlumPrimary = 'deep_purple';
const PlumSecondary = 'deep_purple';
const GreenPrimary = 'teal';
const GreenSecondary = 'green';
const PeacockPrimary = 'light_blue';
const PeacockSecondary = 'indigo';
const ScarlettPrimary = 'red';
const ScarlettSecondary = 'orange';
const WhitePrimary = 'grey';
const WhiteSecondary = 'light_blue';


$('#ColonelMustard').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + MustardPrimary + '-' + MustardSecondary + '.min.css';
  $("#title")[0].innerHTML = 'Colonel Mustard';
  $("#mobilecolor")[0].content = '#FF9800';
});

$('#ProfessorPlum').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + PlumPrimary + '-' + PlumSecondary + '.min.css';
  $("#title")[0].innerHTML = 'Professor Plum';
  $("#mobilecolor")[0].content = '#673AB7';
});

$('#ReverendGreen').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + GreenPrimary + '-' + GreenSecondary + '.min.css';
  $("#title")[0].innerHTML = 'Reverend Green';
  $("#mobilecolor")[0].content = '#009688';
});

$('#MrsPeacock').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + PeacockPrimary + '-' + PeacockSecondary + '.min.css';
  $("#title")[0].innerHTML = 'Mrs Peacock';
  $("#mobilecolor")[0].content = '#03A9F4';
});

$('#MissScarlett').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + ScarlettPrimary + '-' + ScarlettSecondary + '.min.css';
  $("#title")[0].innerHTML = 'Miss Scarlett';
  $("#mobilecolor")[0].content = '#F44336';
});

$('#MrsWhite').click((e) => {
  $("#css")[0].href = 'https://code.getmdl.io/1.3.0/material.' + WhitePrimary '-' + WhiteSecondary + '.min.css';
  $("#title")[0].innerHTML = 'Mrs White';
  $("#mobilecolor")[0].content = '#B0BEC5';
});
