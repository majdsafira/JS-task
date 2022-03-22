/* first ex*/
var x, y;
x = 2;
y = 9;
if (x > y) {
document.write(x);
}
else {
document.write(y);
}




document.write("<br>");
/*second ex*/
var num1, num2, num3;
num1 = 2;
num2 = 3;
num3 = -5;

var pro = num1 * num2 * num3;

if (pro > 0) {
document.write("+");

}
else {
document.write("-")
}




document.write("<br>");
/*third ex*/
var num1, num2, num3;
num1 = 2;
num2 = 3;
num3 = 5;

if (num1 > num2 && num1 > num3) {
    document.write(num1);
    if (num2 > num3) {
        document.write(num2);
    }
    document.write(num3)
}
else if (num2 > num1 && num2 > num3) {
    document.write(num2);
    if (num1 > num3) {
        document.write(num1);
    }
    document.write(num3)
    
}
else if (num3 > num1 && num3 > num2) {
    document.write(num3);
    if (num2 > num1) {
        document.write(num2);
    }
    document.write(num1)
}


document.write("<br>");
/*forth ex */ 
var num1, num2, num3;
num1 = 12;
num2 = 3;
num3 = 9;
num4 = 4;
num5 = 6;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    alert(num1);
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    alert(num2);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    alert(num3);
   
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    alert(num4);
   
}
else if (num5 > num1 && num5 > num2 && num5 > num4 && num5 > num4) {
    alert(num5);
   
}


document.write("<br>");
/*ex five*/
var x, y;
x = 12;
y = 9;
if (x > y) {
alert("hello world");
}
else {
alert("goodbye");
}
