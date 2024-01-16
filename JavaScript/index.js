/* 
1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 



let date = new Date()
let days = date.getDay()
let daysName = ["Sanday", "Monday", "Tuesday", "WednesDay", "thurseday", "Friday" , "Sturday",];

document.write(`Today is : ${daysName[days]} <br><br>` );

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

document.write(`Current Time: ${hour}${prepand} : ${minute}: ${second}`);

Write a JavaScript program to print the current window contents.
*/

/*
JavaScript program to print the current window contents.
function PrintCurruntPage()
{
document.write(window.Audio);
}
*/

/* 
3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date()
let month =  date.getMonth()
let day =  date.getDay()
let year =  date.getFullYear()

let months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
let newMonth = months[month]

document.write(`${newMonth} / ${day} / ${year}`)

=================

/*  
4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
function FindTringle(l,h,a){
    let length = l * l;
    let heigth = h * h;
    let area = a * a;

    let BaseAndHeigth = heigth + area;
    if(length === BaseAndHeigth){
        return `${BaseAndHeigth} true`
    }else{
        return `${BaseAndHeigth} false`
    }

}

document.write(FindTringle(13,12,5))
*/

/* 
5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. 
*/
// let elementId = document.getElementById('target')
// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0]; // assuming no other children
//   var text = textNode.data;

//   setInterval(function () {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }

// animate_string('elementId');

/* if a year is leap year */

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// document.write(leapyear(2016));
// document.write(leapyear(2000));
// document.write(leapyear(1700));
// document.write(leapyear(1800));
// document.write(leapyear(100));

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

/* 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". */

// const num = Math.ceil(Math.random() * 10);
// document.write(num);
// const gnum = prompt("Guess the number between 1 and 10 inclusive");

// if (gnum == num) {
//   document.write("Matched");
// } else {
//   document.write("Not matched, the number was " + gnum);
// }

/* 
9. Write a JavaScript program to calculate the days left before Christmas.  
today= new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
document.write(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!"); 

*/

/* 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).   */

/* function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
} */

// function celsiusBy(){
//     let fahrenheit = document.getElementById('fahrenheit').value;
//     document.getElementById('result').innerHTML =  ((fahrenheit -32)*5 )/9
// }

/* 
JavaScript: Get the extension of a filename
----------------------
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());
filename = "inndex.html"
console.log(filename.split('.').pop()); */

/* function difference(n){
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(32))
console.log(difference(11)) */

/* 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  */
/* function xoxo(num1, num2){
    if( num1 === num2){
        let triple =  ( num1 + num2 ) * 3
        return triple;
    }else{
        return false;
    }
}
console.log(xoxo(5,5)) */

/* 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
-----------------------------
function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
console.log(check(10,20))
*/

/* 
19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function testhundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));
*/

/* 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
 
function positive_negative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
*/
/* 
JavaScript: Create a new string adding "Py" in front of a given string
function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
    {
      return str1;
    }
    return "Py"+str1;
  }
console.log(string_check("Python"));
console.log(string_check("thon"));
*/

// let nam = "Puneet";
// console.log(nam.substring(0,3))

/* 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.   

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
console.log(remove_character("Python",0));
console.log(remove_character("Python",0));
*/

/* 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.   

function first_last(str1){
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  console.log(str1.charAt(str1.length - 1))
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));
*/

/* Create a new string from a given string with the first character of the given string added at the front and back 
// Puneet
// PPuneetP
function string_check(str){
    let newStr1 = str.substring(0,1)
    let newStr = newStr1 + str + newStr1
    return newStr
}

console.log(string_check("Puneet"))
*/

/* 
25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.


function check(x){
    if(x < 0 )return "value should be greater then 1";

    if(x % 3 == 0 || x % 7 == 0){
        return true
    }else{
        return false
    }

}
console.log(check(15)) */

/* 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
 */
// Puneet;
// eetPuneeteet;
/* function str(value) {
  if (value.length >= 3) {
    return value;
  } else {
    let newStr1 = value.slice(value.length - 3, value.length);
    let newStr = newStr1 + value + newStr1;
    return newStr;
  }
}
console.log(str("Puneet")); */

/* 
27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function checker(string){
  let substring = string.substring(0,4)
  let matchWith = "Java";
  if(substring === matchWith){
    return true
  }else{
    return false
  }
}
console.log(checker("JavaScript"))

*/

/* 
28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. 


function checker(a){
  let num = a
  if(num >= 50 && num <= 99){
    return num
  }
  else{
    return "Value out of range"
  }
}
console.log(checker(55))
*/

/* 
30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  
// "Javascript"
function check_script(str){
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
  if (str.substring(10, 4) == 'Script') 
    {
    result_str = str.substring(0, 4) + str.substring(10,str.length);  
  }
  return result_str;
}
console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));

*/

/* 31. Write a JavaScript program to find the largest of three given integers.
// 10, 12 , 15
function max_checker(a, b, c){
  let maxValue = 0;
  if(a > b){
    maxValue = a
  }else{
    maxValue = b
  }
  if(c > maxValue){
    maxValue = c
  }
  return maxValue;
}
console.log(max_checker(10,12,-15))
*/

/* 
32. Write a JavaScript program to find the closest value to 100 from two numerical values. 

function closestValue(x, y){
  if(x != y ){
    let a = Math.abs(x - 100)
    let b = Math.abs(y - 100)
    if(a > b){
      return a
    }
    if(b > a){
      return b
    }
    return 0;
  } else
  return false;
}

console.log(closestValue(10,22))

*/

/* 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

function numbers_ranges(x, y) {
  if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
      || 
      (x >= 70 && x <= 100 && y >= 70 && y <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}
console.log(numbers_ranges(44, 56));
console.log(numbers_ranges(70, 95));
console.log(numbers_ranges(50, 89));
 */

/* 
34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 

function max_townums_range(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "Numbers don't fit in range";
  }
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));

*/

/* 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 
"Puneet";

function check_char(str1, char) {
  ctr = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) return true;
  return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));
*/

/*
36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

function checkDig(x, y, z){
  var check1 = x.toString();
  var A = check1.charAt(check1.length -1);
  var check2 = y.toString();
  var B = check2.charAt(check2.length -1);
  var check3 = z.toString();
  var C = check3.charAt(check3.length -1);
  if(A === B && B === C ){
  return true;
  }else{
  return false;
  }
  }

*/

/* 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. 

function upper_lower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  front_part = str.substring(0, 3).toLowerCase();
  back_part = str.substring(3, str.length);
  return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));

*/

/* 
38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.  

function exam_status(totmarks, is_exam) {
  if (is_exam) {
    return totmarks >= 90;
  }
  return totmarks >= 89 && totmarks <= 100;
}

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));
*/

/* 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.   

function sumOfInt(x,y){
  let sum = x + y;
  if( sum >= 50 && sum  <= 80){
    return 65
  }else {
    return 80
  }
}
console.log(sumOfInt(10,5)) */

/* 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 

function check8(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }
  if (x + y == 8 || Math.abs(x - y) == 8) {
    return true;
  }
  return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18)); */

/* 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  

function three_numbers(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }

  if (x == y || y == z || z == x) {
    return 40;
  }

  return 20;
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));

console.log(three_numbers(10, 10, 10));  */

/* 42. Check whether three given numbers are increasing in strict mode or in soft mode
function number_order(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}
console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));
 */

/* 
function same_last_digit(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}
console.log(same_last_digit(22, 32, 42));
console.log(same_last_digit(102, 302, 2));
console.log(same_last_digit(20, 22, 45)); */

/* 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.   
function lessby20_others(x, y, z) {
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < y || z < x))
  );
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75)); */

/* 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  

function check(x,y){
  let sum = x + y
  let diff = x % y;
  if( sum === 15 || diff===15){
    return true
  }
  if(x === 15 || y === 15){
    return true
  }
  return false
}
console.log(check(1,5)) */

/* 
46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. 
function valCheck(a, b) {
  if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
  } else return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20)); */

/* 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  
For example 40 presents in 40 and 4000 

function chech(num){
  if( num >= 40 && num <= 10000){
    return true
  }else{
    return false
  }
}

console.log(chech(105)) */

/* 48. Write a JavaScript program to reverse a given string.  

function reverse(str){
  return str.split("").reverse().join("");
}

console.log(reverse("Puneet")) */

/* 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

function LetterChanges(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch(s[i]) {
          case ' ':
            break;
          case 'z':
            s[i] = 'a';
            break;
          case 'Z':     
            s[i] = 'A';
            break;
          default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // Upper-case vowels
        switch(s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php")); */

/* 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  

function capitalize(str){
  let a = str.substring(0,1).toUpperCase();
  let b = str.slice(1)
  return a + b
}
Jai Shree Ram
console.log(capitalize("puneet")) */

/* 
51. Write a JavaScript program to convert a given number into hours and minutes.   

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}
console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));
*/

/* 
52. Write a JavaScript program to convert letters of a given string alphabetically.  
function alphabet_Soup(str) { 
  return str.split("").sort().join(""); 
}
console.log(alphabet_Soup("Python"));
console.log(alphabet_Soup("puneet"));
console.log(alphabet_Soup("Exercises"));  */

/* 
53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.   
function ab_Check(str) {
  return (/a...b/).test(str) ||  (/b...a/).test(str)
}
console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
*/

/* 54. Write a JavaScript program to count the number of vowels in a given string.

function vowel_Count(str) {
  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));
console.log(vowel_Count("Puneet"))  */

/* 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.   

function equal_pt(str) {
  var str_p = str.replace(/[^p]/g, "");
  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps")); */

/* 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  

n1 = 80;
n2 = 6;

var div = Math.round(n1 / n2).toString(),
result_array = div.split("");
console.log(div)

if (div >= 1000) {
  for (var i = div.length - 3; i > 0; i -= 3) {
    result_array.splice(i, 0, ",");
  }
  result_array;
}
console.log(result_array); */

/* 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.   
function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));*/

/* 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 

function copies(str){
  if(str.length >=3){
    let substring = str.substring(str.length -3)
    let repeat = substring.repeat(4);
    return str + repeat
    
  }else{
    return false
  }
}

console.log(copies("Puneet"))  */

/* 
59. Write a JavaScript program to extract the first half of a even string  

function first_half (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("Python"));  
console.log(first_half("JavaScript")); 
console.log(first_half("PHP")); */

/* 60. Write a JavaScript program to create a new string without the first and last characters of a given string.   

function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP')); */

/* 
61. Write a JavaScript program to concatenate two strings except for their first character.   

function concatenate(str1, str2) {
  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
}

console.log(concatenate("PHP","JS"));
console.log(concatenate("A","B"));
console.log(concatenate("AA","BB"));       */

/* 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  

function right_three(str) {
  if (str.length > 1) {
    return str.slice(-3) + str.slice(0, -3);
  }
  return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Puneet"));  */

/* 
63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.   

function character(str) {
  if (str.length >= 3 && str.length % 2 !== 0) {
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
  } else {
    return "even string or less char";
  }
}
console.log(character("Punee")); */

/* 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

function concatenate(str1, str2) {
  if (str1.length === str2.length) {
    return str1 + str2;
  }
  if (str1.length > str2.length) {
    let str1Inc = str1.substring(0, str2.length);
    return str1Inc + str2;
  } else if(str2.length > str1.length){
    let str1Inc = str2.substring(0, str1.length);
    return str1 + str1Inc;
  }else{
    return `somthing went wrong`
  }
}

function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length);
  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

console.log(concatenate("Yadav", "Puneet"));  */

/* 
65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.  

function end_script(str) {
  if (str.substring(str.length - 6, str.length) == "Script") {
    return true;
  } else {
    return false;
  }
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts")); */

/* 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function check(str) {
  if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
    return str;
  } else {
    return;
  }
}
console.log(check("Los Angles"))   */

/* 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.   

function remove(str){
  if(str.substring(0,1)=== "P" && str.substring(str.length-1)=== "P"){
    return str.substring(1, str.length-1)
  }else{
    return str
  }
}
console.log(remove("POooooP00")) */

/* 
68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.   
function two_string(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3)); */

/* 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.   

function sum_three(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sum_three([10, 32, 20]));  
console.log(sum_three([5, 7, 9])); 
console.log(sum_three([0, 8, -11])); */


/* 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  
function rotate_elements_left(array)
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5]));  */



