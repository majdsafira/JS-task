var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var bd = document.getElementById('bd').value;
var email = document.getElementById('em').value;
var confirm = document.getElementById('con').value;
var password = document.getElementById('pass').value;
var confirmPass = document.getElementById('passCon').value;

// check var
var ch = /^[a-zA-Z]/;
var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function reg() {
    checkName();

}

function checkName() {
    if (fname.match(ch) && lname.match(ch)) {
        return true;
    }
    else {
        return "please check your first name";
    }
}

function checkEmail() {
    if (email.match(pass)) {
        window.alert("error")
        return true;
    
    }
    else {
    
         return false;
    
    }
}