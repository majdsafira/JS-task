function fontType() {
    let x = document.getElementById('font_type').value;
    document.getElementById("para").style.fontFamily = x;
}

function fontSize() {
    let y = document.getElementById('font_size').value;
    document.getElementById("para").style.fontSize = y + "px";
}


function fontstyle1() {
    var x = document.getElementById("italic").checked;
    if (x) {
        document.getElementById("para").style.fontStyle = "italic";
    }
    else {
        document.getElementById("para").style.fontStyle = "normal";
    }

}
function fontstyle2() {

    var x = document.getElementById("bold").checked;
    if (x) {
        document.getElementById("para").style.fontWeight = " bold";
    }
    else {
        document.getElementById("para").style.fontWeight = " normal";
    }
}
function fontstyle3() {
    var x = document.getElementById("underline").checked;
    if (x) {
        document.getElementById("para").style.textDecoration = "underline";
    }
    else {
        document.getElementById("para").style.textDecoration = "none";
    }

}
