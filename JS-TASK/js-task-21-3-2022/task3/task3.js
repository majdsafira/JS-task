/*ex one*/
function subtract(n){
    var num = n;
    var i = n-1;
     
    while (i > 0){
        num = num - i;
        i--;
    }
    
    return num;
}

document.write(subtract(9));





document.write("<br>");
/*ex tow*/
function factorial(n){
    var num = n;
    var i = n-1;
     
    while (i > 1){
        num = num * i;
        i--;
    }
    
    return num;
}

document.write(factorial(4));






document.write("<br>");
/*ex three*/
function repeatStr(str , num){
    if(str !== ""){
     result = [];
     i = 0;
     while(i < num){
         result[i] = str;
         i++;
     }
 
     return result;
        
    }
    else{
         result = "The string is empty";
         return result;
     }
 }
 
 document.write(repeatStr("to ",2));





 document.write("<br>");
/*ex four*/
function sumtion(num1 , num2){
    var sum = 0;
      i = 0;
 
     let min = num1;
     let max = num2;
 
     if(min > num2){
         min = num2;
         max = num1;
     }
     i = min;
     while(i <= max){
         sum = sum + i;
         i++;
     }
    
    return sum;
 }
 
 document.write(sumtion(4,2));
 





 document.write("<br>");
 /*ex five*/
 function repeatStr2(string1 , string2){
    if(string1 !== "" & string2 !== ""){
     result = [];
     i = 0;
     number = string2.length;
     while(i < number){
         result[i] = string1;
         i++;
     }
 
     return result;}else{
         result = "The string is empty";
         return result;
     }
 }
 
 console.log(repeatStr2("ro","cc"));






 document.write("<br>");
 /*ex six*/
 function multiOf(num1 , num2 , num3){
    res = 1;
    let i = 0;
    while(i < num3){
        res = res * num2;
        i++;
    }
    

    return res * num1;
}

 document.write(multiOf(4, 10, 3));






 document.write("<br>");
 /*ex seven*/
 function multi2(num1 , num2){
    var mult = 1;
    i = 0;

   let min = num1;
   let max = num2;

   if(min > num2){
       min = num2;
       max = num1;
   }
   i = min;
   
   while (i<= max) {
       mult = mult * i;
       i++;
   }
   return mult;
}

document.write(multi2(3, 6));







document.write("<br>");
/*ex eight*/
function numberBetweenUs(num1 , num2){
    var mult = [];
    i = 0;

   let min = num1;
   let max = num2;

   if(min > num2){
       min = num2;
       max = num1;
   }
   
   i = min+1;
   index = 0;
   
   while (i<= max) {
       mult[index] = i;
       index++;
       i++;
   }
   return mult;
}

document.write(numberBetweenUs(2, 8));







document.write("<br>");
/*ex nine*/
function countDown(num1){
    var count = [];
    index = 0;

   
   while (num1 > 0) {
       count[index] = num1;
       index++;
       num1--;
   }
   
   count[index] = "done";
   return count;
}

document.write(countDown(8));







document.write("<br>");
/*ex ten*/
function multiption2(num1, num2) {
    var sum = 0;
    
    while (num1 > 0) {
       sum = sum + num2;
       num1--;
    }
    
  
    return sum;
}

document.write(multiption2(2, 8));
