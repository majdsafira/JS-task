console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 answer: 
 [1.7, 9, 45]


 ["Str" "alex","moh"
 answer:
 ["str", "alex", "moh"]



 'the','fox' 'over' lazy, 'dog',  ]
 answer: 
 ['the', 'fox', 'over'; 'lazy', 'dog']



*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

answer:
tomato (0)
banana (1)

*/

/************************************************************ */
/************************************************************ */


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
/************************************************************ */
//answer 1
const favfood = ["burger", "zenger", "chips", "banana", "apple"];
document.write(favfood);
/************************************************************ */
//answer 2
const favsport = ["football", "basketball", "bodybulding"];
document.write(favsport);
/************************************************************ */
//answer 3
const favmovi = ["first", "second", "third", "forth"];
document.write(favmovi);
/************************************************************ */
/************************************************************ */



/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"


//answer 
function firstOfArray(array) {
    let char = array[0];
    return char;

}
let arr = [1, 4 , 5];
document.write(firstOfArray(arr));
*/
/*********************************************************** */
/*********************************************************** */




/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"

//answer 
function lastOfArray(array) {
    let char = array[(array.length) - 1];
    return char;

}
let arr = [1, 4 , 5];
document.write(lastOfArray(arr));
*/
/*********************************************************** */
/*********************************************************** */




/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]

answer:
array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
document.write(array);
*/
/*********************************************************** */
/*********************************************************** */





/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
//answer 
array = [0,5,7,9];
array.push(10);
array.unshift(10);
array.shift();
array.pop();
document.write(array);
*/
/*********************************************************** */
/*********************************************************** */





/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

//answer
   function middleOfArray(array) {
        const mid = array.length/2
         let char = array[mid];
                 if ((array.length) % 2 == 0) {
                char = array.slice(mid-1,mid+1);

                 }
                 else {
                    char = array[Math.floor(mid)];
                 }
                 return char;

 }

 let arr = [1, 4 , 6];
 document.write(middleOfArray(arr))
*/

/***************************************************** */
/***************************************************** */


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]

let animals = [] ; 
length.animals = 5 ;
animals[0] = ['zebra']
animals[1] = ['elephant']
document.write(`${animals[0]} <br>`)
document.write(`${animals[1]} <br>`)
*/
/***************************************************** */
/***************************************************** */
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self

function indexOfArray (num , ind){
    arrIndex = num[ind]
    return arrIndex;
}
let arrayIndex = ["this is index zero","this is index one","this is index two", "this is index three", "this is index four", "this is index five" ]
document.write(`${indexOfArray(arrayIndex , 4)} <br>`)
*/
/***************************************************** */
/***************************************************** */
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self


function arrayExceptLast (arr5){
    let cutArray = arr5.slice(0, arr5.length - 1)
    return cutArray;
}
let cutted = [0,1,2,3,4,5]
document.write(` ${arrayExceptLast(cutted)} <br>`)
*/
/***************************************************** */
/***************************************************** */
/*

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
