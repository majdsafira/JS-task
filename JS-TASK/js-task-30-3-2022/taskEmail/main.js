var validRegex = /@/g

var x = document.getElementById('em').value;
var check = x.match(validRegex);

function ValidateEmail() {
  if (check) {

    alert("Valid email address!");

  } else {

    alert("Invalid email address!");
  }
}