

// check var
var ch = /^[a-zA-Z]/g;
var ee = /[@ \.]/g;
var pas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function reg() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var bd = document.getElementById('bd').value;
    var email = document.getElementById('em').value;
    var confir = document.getElementById('con').value;
    var password = document.getElementById('pass').value;
    var confirmPass = document.getElementById('passCon').value;


    checkName(fname, lname);
    checkEmail(email);
    checkEmailCon(confir);
    checkPass(password);
    checkPassCon(confirmPass);

}

function checkName(fname, lname) {
    if (fname.match(ch) && lname.match(ch)) { 
    }
    else {
        window.alert("please check your first name");
    }
}

function checkEmail(email) {
    if (email.match(ee)) {
        window.alert("i am work");
    }
    else {
        window.alert("please check your email ");
    
    }    
}

function checkPass(password) {
    if(password.match(pas)) {
    }
    else {
        window.alert("please check your password");
    }
}


function checkEmailCon(confir) {
    if (email = confir) {
    }
    else {
        window.alert("please enter the same email to confirm it");
    }
}


function checkPassCon(confirmPass) {
    if (password = confirmPass) {
    }
    else {
        window.alert("please check your password");
    }
}
