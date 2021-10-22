var allData = [];

allData.push(localStorage.getItem("frm"));

function saveData() {
  validar();
  data = [];

  data.push($("#name").val());
  data.push($("#email").val());
  data.push($("#password").val());

  allData.push(data);

  arjson = JSON.stringify(allData);

  localStorage.setItem("frm", arjson);

  deletedInput();
}

function validar() {
  names = $("#name").val();
  emails = $("#email").val();
  passwords = $("#password").val();

  if (names.length < 3 ) {
    alert("missing enter name");
    return false;
  }
  if (emails.length < 2) {
    alert("missing enter email");
    return false;
  }
  if (passwords.length < 4) {
    alert("missing enter password");
    return false;
  }
}
function deletedInput() {
  $("#name").val("");
  $("#email").val("");
  $("#password").val("");
}
