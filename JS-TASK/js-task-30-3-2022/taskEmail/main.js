var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


var x = document.getElementById('em').value;


function ValidateEmail() {
  if (x.match(validRegex)) {

    alert("Valid email address!");

    return true;

  } else {

    alert("Invalid email address!");

    return false;

  }
}