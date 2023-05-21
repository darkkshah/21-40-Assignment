
// chapter 21
// q1
// var allLower = userInput.toLowerCase();
// console.log(allLower)
// q2
// x = x.toLowerCase();
// q3
// y = y.toUpperCase();
// q4
// var originalString = "Hello World";
// var lowerCaseString = originalString.toLowerCase();
// q5
// var myArray = ["Hello", "World"];
// var index = 1; 

// var lowerCaseString = myArray[index].toLowerCase();
// q6
// var myString = "Hello World";
// var upperCaseString = myString.toUpperCase();

// alert(upperCaseString);
// q7
// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);

// chapter 22-25

// // q1
// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);
// // q2
// var cityName = "kaRacHi";
// var characterCount = cityName.length;

// console.log(characterCoun)
// // q3
// var animal = "elephant";
// var seg = animal.slice(2, 6);

// console.log(seg);
// // q4
// var myString = "Hello, World!";
// var characterCount = myString.length;

// console.log(characterCount);
// // q5
// var myString = "Hello, World!";
// var characterCount = myString.length;
// var slicedString = myString.slice(0, 1) + myString.slice(-3);

// console.log(characterCount);
// console.log(slicedString);
// q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// q7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// q8
// var text = "Let it go, let it go!";
// var indx = text.lastIndexOf("go") + 1;

// console.log(indx);
// q9
// var myString = "Hello, World!";
// var indexNum = 5;

// if (myString.includes(myString[indexNum])) {

//   console.log("Segment exists.");
// } else {

//   console.log("Segment does not exist.");
// }
// // q10
// var myString = "abcde";
// var charAtIndex2 = myString.charAt(2);

// console.log(charAtIndex2);
// q11
// var text = "Lorem ipsum dolor sit amet";
// var cha = text.charAt(9);

// console.log(cha);
// q12
// var str = "Hello, World!";
// var x = str.charAt(str.length - 1);

// console.log(x);
// q13
// var input = "Example String";
// var cha = input[4];

// console.log(cha);
// q14
// var myString = "Hello, World!";
// var specificChar = "l";

// if (myString[2] === specificChar) {

// } else {

// }
// q15
// var myString = "Hello, World!";
// var charArray = [];

// for (var i = 0; i < myString.length; i++) {
//   charArray.push(myString.charAt(i));
// }

// console.log(charArray);
// q16
// var str = "I have 1 apple and 2 oranges.";
// var newStr = str.replace("1", "one");

// console.log(newStr);
// q17
// var x = "Hello, world!";
// var y = x.replaceAll("o", "z");

// console.log(y);

// chapter26
// q1
// var number = 3.7;
// var roundedNumber = Math.round(number);

// console.log(roundedNumber);
// q2
// var origNum = 3.2;
// var roundNum = Math.ceil(origNum);

// console.log(roundNum);
// // q3
// var origNum = 3.7;
// var roundNum = Math.floor(origNum);

// console.log(roundNum);
// q4
// var originalNumber = 3.7;
// var roundedNumber = Math.round(originalNumber);

// console.log(roundedNumber);
// q5
// var number = 0.5;
// var roundedNumber = Math.floor(number);

// console.log(roundedNumber);

//  chapter 27

// q1
// var randomNumber = Math.random();  
// var convertedNumber = Math.floor(randomNumber * 50) + 1;  

// console.log(convertedNumber);
// q2
// var randomNumber = Math.random();

// console.log(randomNumber);
// q3
// var diceNumber = Math.floor(Math.random() * 6) + 1;

// console.log("Dice rolled: " + diceNumber);
// q4

// var tossResult = Math.random();


// var tossOutcome = tossResult < 0.5 ? "Head" : "Tail";

// console.log("Coin Toss Result: " + tossOutcome);

// chapter 28-29
// q1
// parseInt()
// // q2
// function convertStringToInteger(str) {
//     return parseInt(str);
//   }
  
//   var str = "123";
//   var integerNum = convertStringToInteger(str);
  
//   console.log(integerNum);
// // q3
// var decimalStr = "3.14";
// var floatNum = parseFloat(decimalStr);

// console.log(floatNum)
// q4
// var str = "123";

// // Check if the string can be successfully converted to an integer
// var parsedInt = parseInt(str);
// var isInt = !isNaN(parsedInt);

// console.log(isInt);

// // Check if the string can be successfully converted to a decimal
// var parsedFloat = parseFloat(str);
// var isFloat = !isNaN(parsedFloat);

// console.log(isFloat);
// q5
// var num = 42;
// var str = num.toString();

// console.log(str)
// q6
// function convertNumberToString(num) {
//     return num.toString();
//   }
  
//   var number = 42;
//   var str = convertNumberToString(number);
  
//   console.log(str);
// q7
// var decimalStr = "3.14";
// var integerNum = parseInt(decimalStr);

// console.log(integerNum);

// chapter 30 
// q1
// var num = 3.14159265359;
// var newNum = Number(num.toFixed(4));

// console.log(newNum);
// q2
// var num = 3.14159265359;
// num = Number(num.toFixed(2));

// console.log(num);
//  q3
// var num = 3.14159265359;
// if (num.toFixed(2).toString().length > 4) {

// }
//  q4
// var number = 3.14159265359;
// var roundedNumber = number.toFixed(2).toString();

// alert(roundedNumber);
// chapter 31-34
// q1
// var dObj = new Date();
// q2
// var d = new Date();
// var dStr = d.toString();
// // q3
// var d = new Date();
// var day = d.getDay();
// // q4
// var day = 1; // Example day of the week
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// alert(dayNames[day]);
// // q5
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth();
// var day = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var milliseconds = d.getMilliseconds();
// // q6
// var later = new Date(2020, 11, 31);
// // q7
// var dateObj = new Date(1992, 1, 2);
// // q8
// var referenceDate = new Date();
// var beginningOf1980 = new Date(1980, 0, 1);
// var millisecondsElapsed = referenceDate - beginningOf1980;

// alert(millisecondsElapsed);
// // q9
// var dateObj = new Date();
// dateObj.setFullYear(2022);
// // q10
// var dateObj = new Date();
// dateObj.setMonth(0);
// // q11
// dateObj.setDate(dateObj.getDate() + (0 - dateObj.getDay()))
// // q12
// var dateObj = new Date();
// var minuteValue = parseInt(prompt("Enter a minute value:"));
// dateObj.setMinutes(minuteValue);
// // q13
// var dateObj = new Date();
// dateObj.setHours(dateObj.getHours() + 3);
// q14
// var a = new Date("02-06-2005");

// console.log(a.getDate());
// console.log(a.getDay());
// console.log(a.getMonth());
// console.log(a.getFullYear());
// console.log(a.getHours());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getTime());

// // var b = 1683301713628
// // var c = 1107630000000

// // var d = (b-c)

// // console.log(d)

// var b = 575671713628;
// var c = b / (1000 * 60 * 60 * 24 * 365)

// console.log((c).toFixed(2));


// chapter 35-37
// q1
// function displayAlert() {}
// q2
// function askName() {
//     var userName = prompt("Enter name");
//   }
  
// q3
// function mainFunction() {
//     // Call the first function
//     function1();
  
//     // Call the second function
//     function2();
//   }
// q4
// function getNameAndDisplay() {
//     var name = prompt("Enter name");
//     alert("Name: " + name);
//   }
  
//   // Call the function
//   getNameAndDisplay();
// q5
// function concat(variable, string, number) {}
// q6
// function concatenateStrings(string1, string2) {
//     var concatenated = string1 + string2;
//     return concatenated;
//   }
  
//   // Example usage
//   var result = concatenateStrings("Hello", " World");
//   console.log(result);
// q7
// function multiplyNumbers(num1, num2, num3) {
//     var result = num1 * num2 * num3;
//     return result;
//   }
  
//   // Example usage
//   var product = multiplyNumbers(2, 3, 4);      
//   console.log(product);
// q8
// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     var average = sum / numbers.length;
//     return average;
//   }
  
//   // Example usage
//   var numbers = [1, 2, 3, 4, 5];
//   var average = calculateAverage(numbers);
//   console.log(average);
// q9
// function calculateSum(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
//   }
  
//   // Example usage
//   var result = calculateSum(5, 3);
//   console.log(result);
// q10
// function multiplyNumbers(num1, num2) {
//     var product = num1 * num2;
//     return product;
//   }
  
//   var result = multiplyNumbers(3, 4);
//   console.log(result);
// q11
// function countLetters(word) {
//     var counts = {};
//     for (var i = 0; i < word.length; i++) {
//       var letter = word[i];
//       if (counts[letter]) {
//         counts[letter]++;
//       } else {
//         counts[letter] = 1;
//       }
//     }
//     return counts;
//   }
  
//   // Example usage
//   var word = "hello";
//   var letterCounts = countLetters(word);
//   console.log(letterCounts);
// q12
// function setYear(date, year) {
//     date.setFullYear(year);
//   }
  
//   // Example usage
//   var myDate = new Date();
//   console.log(myDate); 
//   setYear(myDate, 2022);
//   console.log(myDate);
// q13
// function setYear(date, year) {
//     date.setFullYear(year);
//   }
  
//   // Example usage
//   var myDate = new Date();
//   console.log(myDate); 
//   setYear(myDate, 2022);
//   console.log(myDate);
// q14
// function calculateAge(dateOfBirth) {
//     var currentYear = new Date().getFullYear();
//     var birthYear = dateOfBirth.getFullYear();
//     var age = currentYear - birthYear;
//     return age;
//   }
  
//   // Example usage
//   var dateOfBirth = new Date("1990-05-15");
//   var age = calculateAge(dateOfBirth);
//   console.log(age);
// // q15
// function checkWordPresence(word, array) {
//     return array.includes(word);
//   }
  
//   // Example usage
//   var words = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//   var isPresent = checkWordPresence('raza', words);
//   console.log(isPresent);
// // q16
// function repeatLetter(letter) {
//     var repeated = letter.repeat(10);
//     return repeated;
//   }
  
//   // Example usage
//   var result = repeatLetter('a');
//   console.log(result);
// // q17
// function reverseArray(array) {
//     var reversed = array.reverse();
//     return reversed;
//   }
  
//   // Example usage
//   var array = ['a', 'b', 'c', 'd', 'e'];
//   var reversedArray = reverseArray(array);
//   console.log(reversedArray);
// chapter 38
// q1
// function printMessage() {
//     var message = "Hello, world!"; 
//     console.log(message);
//   }
  
//   printMessage(); 
//   console.log(message);
// q2
// var globalVariable = "I am a global variable";

// function printGlobalVariable() {
//   console.log(globalVariable);n
// }

// printGlobalVariable();
//  chapter 39-40
// q1

// var day = "sat";
// // var day = prompt ("enter day")

// if (day == "sat") {

// }
// else if (day == "tue") {

// }
// switch (day) {
//   case "mon":
//     alert("monday")
//     break
//   case "tue":
//     alert("tuesday")
//     break
//   case "wed":
//     alert("wednesday")
//     break
//   case "thu":
//     alert("thursday")
//     break
//   case "fri":
//     alert("friday")
//     break
//   case "sat":
//     alert("saturday")
//     break
//   case "sun":
//     alert("sunday")
//     break
//     default:
//       alert(
//         "nhi dikha raha koi din"
//       )
//       }
// q2

// var cityName = prompt("Enter a city name");

// switch (cityName) {
//   case "London":
//     alert("You entered London!");
//     break;
//   case "Paris":
//     alert("You entered Paris!");
//     break;
//   case "Tokyo":
//     alert("You entered Tokyo!");
//     break;
//   default:
//     alert("The city you entered is not recognized.");
// }