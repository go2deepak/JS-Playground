//Javascript

// Anagram
// palidrome
//parenthisis
// Fibonacii
// longestSubstring
// Move all zeros to right
// all SubArrays 
// all subArrays of size z
// sum of all subarrays of size z
// Prints all triplets in arr[] with 0 sum 
// remove duplicates
// flatten Array
//pair
// sort an array
// Reduce method example
// flatten object 
// flatten object with a character
// array of object groupBy
// count number of letters
// fetch data using promises
// Throttling
// Debouncing


// React

// context API example theme change
// parent to child prop pass color change
// todo app
// fetch API
// pagination
// infine scrolling
// counter
// HOC
// useCall back
// Use Memo
// UseRef
// Timer example
// form Validation
// Search functionality
// Change color
// custom useFetch Hook
// Counter using useReducer hook
// Redux boiler plate code



// // *****************************Valid Parenthises******************************* 	

// let str = '[{([])}][])';

// function isValid(str){
//     let stack = []

//     for(let i = 0; i<str.length; i++){
//         if(str[i] === '('){
//             stack.push(')')
//         }else if(str[i] === '['){
//             stack.push(']')
//         }else if(str[i] === '{'){
//             stack.push('}')
//         }else if(str[i] !== stack.pop()){
//             return false
//         }
//     }
//     return stack.length === 0
// }
// console.log(isValid(str));

// ________________________________________________________________________________________

// let str = "{([)]}";

// function valid(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
//       count++;
//     } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
//       count--;
//     }
//     if (count < 0) {
//       return false;
//     }
//   }
//   return count === 0;
// }

// console.log(valid(str));

// // ****************Reverse letters of a word************************************** 
// let str = "Hello";
// function revWord(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(revWord(str));

// // **************************Reverse words of a sentence******************************

// let sentence = "Hello! How are you";

// function RevWord(str) {
//   return sentence.split(" ").reverse().join(" ");
// }
// console.log(RevWord(sentence));

// // ********************* reverse words in a sentece , order intact************************************

// let sentence = "I am a nice boy";

// function revwordOrderSame(str) {
//   let newArr = sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""));
//   let result = newArr.join(" ");
//   console.log(result);
// }
// revwordOrderSame(sentence);

// ***********************************Snake Later ************************************

// let str = 'thisIsACat'
// function snake(str){
//     let result  = ''

//     for(let i = 0; i< str.length; i++){
//         if(str[i] === str[i].toUpperCase() && i != 0){
//             result += '_' + str[i]
//         }
//         else{
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(snake(str));


// ********************************* Flatten Array*******************************

// let arr = [1, [2, [3]]];

// function flatten(arr) {
//   let flattended = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       flattended = flattended.concat(flatten(item));
//     } else {
//       flattended.push(item);
//     }
//   }
//   return flattended;
// }
// console.log(flatten(arr));
// let arr = [1,2,3[4,[5]]]

// function flattenArray(arr) {
//     var flatArray = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (var j = 0; j < arr[i].length; j++) {
//                 flatArray.push(arr[i][j]);
//             }
//         } else {
//             flatArray.push(arr[i]);
//         }
//     }

//     return flatArray;
// }
// console.log(flattenArray(arr));
// ******************************Find duplicate Array***************************

// const arr = [1, 2, 1, 3, 4, 3, 5];

// const removeDup = (arr) => {
//   return arr.filter((item, index) => arr.indexOf(item) !== index);
// };

// console.log(removeDup(arr));

// *********************Flatten an Object****************************

var nestedObject = {
    name: "John",
    address: {
      city: "New York",
      zip: "10001",
    },
    hobbies: {
      play: "yes",
      noplay: {
        sleep: "yes",
      },
    },
  };

//   function flatObj(obj) {
//     var newObj = {};

//     function flattenHelper(givenObj) {
//       for (let key in givenObj) {
//         if (typeof givenObj[key] === "object") {
//           flattenHelper(givenObj[key]);
//         } else {
//           newObj[key] = givenObj[key];
//         }
//       }
//     }

//     flattenHelper(obj);
//     return newObj;
//   }
//   console.log(flatObj(nestedObject));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var flattendObj = {};
// const flattenObject = (obj, keyName) => {
//   Object.keys(obj).forEach(key => {
//     var newKey = `${keyName}_${key}`
//     if (typeof obj[key] === "object") {
//       // calling the function again
//       flattenObject(obj[key], newKey);
//     } else {
//       flattendObj[newKey] = obj[key];
//     }
//   });
// };
// flattenObject(nestedObject)
// console.log(flattendObj);

// __
// 
// function flat(obj, prefix = "") {
//   let result = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       // Recursive call with updated key prefix
//       let flattened = flat(obj[key], prefix + key + ".");
//       Object.assign(result, flattened);
//     } else {
//       // Assign non-object values directly
//       result[prefix + key] = obj[key];
//     }
//   }

//   return result;
// }

// Example object
// const obj = {
//   a: 1,
//   b: { c: 2, d: { e: 3, f: 4 } },
//   g: 5,
// };

// console.log(flat(obj));
___________________________________________________


// const flattenObject = (obj, keyName) => {
//     var flattendObj = {};
//   Object.keys(obj).forEach(key => {
//     var newKey = `${keyName}_${key}` 
//     if (typeof obj[key] === "object") {
//       // calling the function again
//       flattenObject(obj[key], newKey);
//     } else {
//       flattendObj[newKey] = obj[key];
//     }
//   });
//   return flattendObj
// };
// console.log(flattenObject(nestedObject));
// ___________________________________Find peak elemet___________________________

// let arr = [2,3,4,5, 6]

// function findPeakElement(arr){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > arr[i+1] && arr[i]> arr[i-1]){
//             console.log(arr[i]);
//         }
//     }
// }
// findPeakElement(arr)

// __________________________Find max min____________________________________/

// let arr = [2,83,4,5, 6]

// function findMax(params) {
//     let max = 0
//     let min  = 0
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i]> max){
//             max = arr[i]
//         }else if(arr[i]<min){
//             min = arr[i]
//         }
//     }
//     return [max, min]
// }

// console.log(findMax(arr))

// _______________________________Reverse an array_______________________________

// let arr = [2,83,4,5, 6]

// function reverseArr(arr){
//     let len = arr.length
//     for(let i = 0; i<Math.floor(len/2); i++){
//         let temp = arr[i]
//         arr[i] = arr[len-1 -i]
//         arr[len-1 -i] = temp
//     }
//     return arr
// }
// console.log(reverseArr(arr));

// function rev(arr){
//     let newArr = []

//     for(let i = arr.length-1; i>=0 ; i-- ){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(rev(arr));

// ____________________________Sort an array_____________________________________________

// let arr = [2,83,4,5, 6]

// function sortArr(arr){
//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j<arr.length; j++){
//            if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//            }
//         }
//     }
//     return arr
// }

// console.log(sortArr(arr));

// _________________________________Occurence of an element______________________________

// let arr = [2,83,4,5, 6, 6, 6]

// function occure(arr, num){
//     let count = 0
//     for(let i = 0; i< arr.length; i++){
//         if(num === arr[i]){
//             count++
//         }
//     }
//     return count
// }

// console.log(occure(arr, 6));





// *************************Remove duplicates***********************************

// let arr = [1,2,3,2,3,4,5,4,3]

// function removeDuplicates(arr){
//     return arr.filter((value, index, self)=>{
//         return self.indexOf(value) === index
//     })
// }
// console.log(removeDuplicates(arr));

// function removeDuplicates(){
//     return arr.reduce((uniq, currEle)=>{
//         if(!uniq.includes(currEle)){
//             uniq.push(currEle)
//         }
//         return uniq
//     },[])
// }
// console.log(removeDuplicates(arr));

// function removeDuplicates(arr){
//     let newArr = []

//     for(let i = 0; i<arr.length; i++){
//         if(newArr.indexOf(arr[i]) === -1){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeDuplicates(arr));



// let newArr = arr.reduce((acc, cur) =>{
//     if(!acc.includes(cur)){
//         acc.push(cur)
//     }
//     return acc
// } ,[])
// console.log(newArr);

// ***************************FiboNacii*************************

// function fibo(n){
//   if (n == 0){
//       return 0;
//   }
//   if (n == 1){
//       return 1;
//   }
//   return fibo(n-1) + fibo(n -2)
// }

// function fibo(n){
//   let stack  = []
//   let a = 0;
//   let b = 1

//   for(let i = 0; i< n; i++){
//       stack.push(a)
//       let next = a +b
//       a = b
//       b = next
//   }
// return stack

// }

// console.log(fibo(8));


// // ___________________________________________________________________Occurence___________________
// function findMaxOccurrence(str) {
//     let charCount = {};
//     let maxChar = '';
//     let maxCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         charCount[char] = (charCount[char] || 0) + 1;

//         if (charCount[char] > maxCount) {
//             maxCount = charCount[char];
//             maxChar = char;
//         }
//     }

//     return { char: maxChar, count: maxCount };
// }

// let myString = "hello world";
// let maxOccurrence = findMaxOccurrence(myString);



// ************************************Return duplicate items*************************

// let arr = [1,2,3,2,3,4,5,4,3]

// function returnDuplicates(arr){
//     return arr.filter((value, index, self) => {
//         return self.indexOf(value) !== index || self.lastIndexOf(value)
//     })
// }
// console.log(returnDuplicates(arr));

// function returnDuplicates(arr){
//     let duplicate = []
//     for(let i = 0; i<arr.length - 1; i++){
//         for(let j = i+1; j< arr.length; j++){
//             if(arr[i] == arr[j] && !duplicate.includes(arr[i])){
//                 duplicate.push(arr[i])
//             }
//         }
//     }
//     return duplicate
// }

// console.log(returnDuplicates(arr));

// let arr = [1,2,3,4,5,3,4,2,2]

// let newArr = arr.filter((value, index) =>{ 
//     return arr.indexOf(value) !== index
//  })

//  console.log(newArr);

//  let reduceArr = arr.reduce((newArr, curr)=>{
//         if(!newArr.includes(curr)){
//             newArr.push(curr)
//         }
//         return newArr
// },[])

// console.log(reduceArr);

// function returnDuplicates(arr){
//     let duplicate = []
//     for(let i =0; i<arr.length-1; i++){
//         for(j = i+1; j< arr.length; j++){
//             if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
//                 duplicate.push(arr[i])
//             }
//         }
//     }
//     return duplicate
// }
// console.log(returnDuplicates(arr));


// let arr = [2,4,3,6,5,7,5,6,4,3,9,8]
// let size= 2

// function sizeK(arr, k){
  
//     let maxSum = -Infinity
//     let curSum = 0

//     for(let i =0; i<k; i++){
//         curSum = curSum + arr[i]
//     }
//     for(let i =k; i<arr.length; i++){
//         curSum += arr[i] - arr[i-k]
//     maxSum = Math.max(maxSum, curSum)

//     }
//     return maxSum


// }
// console.log(sizeK(arr, 2));

// ***********************

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
//  i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:
// Input: nums = []
// Output: []
// Example 3:
// Input: nums = [0]
// Output: []
// let arr = [-1,0,1,2,-1,-4]

// function triplets(arr){

//     let newArr = []
//     for(let i =0; i< arr.length; i++){
//         for(let j = 0; j<arr.length; j++){
//             for(let k = 0; k < arr.length; k++){
//                 if(arr[i] + arr[j] + arr[k] === 0 && i != j && i !=k && j !=k ){
//                     newArr.push([arr[i], arr[j], arr[k]]);
//                 }
//             }
//         }
//     }
//     return newArr
// }

// console.log(triplets(arr))

// A simple Javascript program to find
// three elements whose sum is equal to zero
// let arr  = [-1,0,1,2,-1,-4]
	
// Prints all triplets in arr[] with 0 sum 
// 	function findTriplets(arr) {
// 		let found = false;
// 		for (let i = 0; i < arr.length - 2; i++) {
// 		for (let j = i + 1; j < arr.length - 1; j++) {
// 			for (let k = j + 1; k < arr.length; k++) {
// 				if (arr[i] + arr[j] + arr[k] === 0)
// 				{
// 					console.log([arr[i], arr[j], arr[k]], i, j, k);
					
// 				}
// 			}
// 		}
// 		If no triplet with 0 sum found in array
		
// 	}
// }
// 	findTriplets(arr);
// This code is contributed by Surbhi Tyagi


// Maximum sum subarray having sum less than or equal to given sum

// let arr = [2,3,2,1,4,5,6,5,4,3]

// function maxSub(arr, sum){
//     let result = 0

//     for(let i =0; i<arr.length; i++){
//         let currSum = 0

//         for(j = i; j<arr.length; j++){
//             currSum += arr[j]
//             if(currSum<sum){
//                 result = Math.max(currSum, result)
//             }
//         }
//     }
//     return result
// }

// console.log(maxSub(arr, 20))

// *******************Print all subarray**************************************

// let arr = [2, 3, 5];

// function subarray(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       let subarray = [];
//       for (let k = i; k <= i+j; k++) {
//         subarray.push(arr[k]);
//       }
//       console.log(subarray);
//     }
//   }
// }

// subarray(arr);

// __________________________________________________________________________

// function sub(arr){
//     for(let i =0; i< arr.length; i++){
//         for(let j =i; j<arr.length; j++){
//           let  subaa = arr.slice(i, j+1)
//           console.log(subaa);
//         }
//     }

// }
// let arr = [1,2,3]
// sub(arr)


// let arr = [1, 3, 2, 4, 3, 5, 64, 3, 1, 2, 3];

// function findSubarr(arr) {
//   for(let i = 0; i< arr.length; i++){
//     let subArr = [];
//     for(j = i; j<arr.length; j++){
//       subArr.push(arr[j])
//       console.log(subArr);
//     }
//   }
// }

// findSubarr(arr)

// function sumOfAllSubArray(arr) {
//   let total = 0;

//   for(let i = 0; i< arr.length; i++){
//     let sum = 0
//     for(let j = i; j< arr.length; j++){
//       sum += arr[j]
//       total += sum
//     }
//   }
//   return total
// }
// console.log(sumOfAllSubArray([1,2,3]));

// *******************************Subarray of given size*********************************

// let arr = [1,3,2,4,6,5,3,4,7,8]

// function size(arr, size){
//     let subArrs = []
//     for(let i = 0; i<= arr.length -size; i++){
//        let subArr = arr.slice(i, i+size)
//         subArrs.push(subArr)

//     }
//     return subArrs
// }

// console.log(size(arr, 4));

// let arr = [1, 3, 2, 4, 6, 5, 3, 4, 7, 8];

// function size(arr, size) {
//     let subArrs = [];
//     for (let i = 0; i <= arr.length - size; i++) {
//         let subArr = [];
//         for (let j = 0; j < size; j++) {
//             subArr.push(arr[i + j]);
//         }
//         subArrs.push(subArr);
//     }
//     return subArrs;
// }
// console.log(size(arr, 4));


// ___________________________________________sum of subarray________________________
// ******************************************************************************
// let arr = [2,1,3,2,4,5,6,3,4]
// let sum = 15

// function sum2(arr, sun){

//     for(let i = 0; i< arr.length; i++){
//         let curSum = arr[i]

//         if(curSum === sun){
//             console.log('Sum at index', i);
//             return
//         }else{
//             for(let j = i+1; i<arr.length; j++){
//                 curSum = curSum + arr[j]
//                 if(curSum === sun){
//                     console.log('sum found between ', i, j);
//                     return
//                 }
//             }
//         }

//     }
//     return
// }
// console.log(sum2(arr, 15));

// _______________________________________Maximum of all SubArray of Size K___________________
// function maxOfSubarrays(arr, k) {
//     const result = [];

//     for (let i = 0; i <= arr.length - k; i++) {
//         let max = arr[i];
        
//         for (let j = 1; j < k; j++) {
//             if (arr[i + j] > max) {
//                 max = arr[i + j];
//             }
//         }

//         result.push(max);
//     }

//     return result;
// }

// // Example usage:
// const array = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;
// const result = maxOfSubarrays(array, k);

// console.log(`Maximum of all subarrays of size ${k}:`, result);

// ______________________________________________________



// function subArraySum(arr, n, sum) {
//     for (let i = 0; i < n; i++) {
//       let currentSum = arr[i];
  
//       if (currentSum == sum) {
//         console.log("Sum found at indexes " ,i);
//         return;
//       } else {
//         for (let j = i + 1; j < n; j++) {
//           currentSum += arr[j];
  
//           if (currentSum == sum) {
//             console.log("Sum found between indexes " + i + " and " + j);
//             return;
//           }
//         }
//       }
//     }
//     console.log("No subarray found");
//     return;
//   }

  
// let arr = [15, 2, 4, 8, 9, 5, 10, 23];
// let n = arr.length;
// let sum = 23;
// subArraySum(arr, n, sum);

// This code is contributed by garg28harsh.

// // *************************Maximum Sum contigious subarray*********************************
// let arr = [1,2,3,-4,5,-6,3]

// function maxSub(arr){
//   let max = 0
//   let cur = 0

//   for(let i = 0; i<arr.length; i++){
//     cur = cur + arr[i]
//     if(cur> max){
//       max = cur
//     }
//     if(cur <0){
//       max = 0
//     }
//   }
//   return max
// }
// ***********************Move all zeros to right**************************
// let arr = [2, 9, 0, 6, 34, 0, 1, 2, 0, 8];

// function moveZero(arr) {
//   let i = 0;
//   j = arr.length - 1;
//   while (j > i) {
//     if (arr[i] == 0) {
//       let last = arr[j];
//       arr[j] = arr[i];
//       arr[i] = last;
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return;
// }
// moveZero(arr);
// console.log(arr);

// let arr = [2, 9, 0, 6, 34, 0, 1, 2, 0, 8];

// function moveZero(arr) {
//   let noneZeroIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[noneZeroIndex], arr[i]] = [arr[i], arr[noneZeroIndex]];
//       noneZeroIndex++;
//     }
//   }
//   return arr;
// }

// console.log(moveZero(arr));


// *****************************Pair***********************************
// let arr = [1,2,3,4,5]
// //target = 5

// function pair(arr, target){
//     let obj = {}

// for(let item of arr){
//     const compliment = target - item
//     if(obj[compliment]){
//         return [compliment, item]
//     }
//     obj[item] = true
    
// }
// return null
// }

// console.log(pair(arr, 5));

// function pair(arr, target) {
//   let seen = new Set();

//   for (let item of arr) {
//       let complement = target - item;
//       if (seen.has(complement)) {
//           return [complement, item];
//       }
//       seen.add(item);
//   }
  
//   return null;
// }

// Example Usage
// const arr = [1, 2, 3, 4];
// console.log(pair(arr, 5)); // Output: [2, 3]


// ***************************repeatation***************************
// let arr = [1,2,1,3,4,34]

// function repeat(arr){
//     let obj = {}
//     for(let item of arr){
//         obj[item] = (obj[item] || 0) + 1
//     }
//     return obj
// }

// console.log(repeat(arr));



// let x = true;
// let y = false;
// let z =  1 && 0;

// console.log(z);
// console.log(true);

// let x = 1;
// let y = "1";

// console.log(x++, y++);

// let x = "b";
// let y = "a";
// console.log(x + y + +y + y);

// let arr = [
//   { name: "abc", hobbies: ["test1", "test2", "test3"] },
//   { name: "def", hobbies: ["test4", "test5", "test6"] },
//   { name: "ghi", hobbies: ["test7", "test8", "test9"] },
// ];

// output = [
//   { abc: ["test1", "test2", "test3"] },
//   { def: ["test4", "test5", "test6"] },
//   { ghi: ["test7", "test8", "test9"] },
// ];

// const newArr = arr.map(item => ({[item.name]: item.hobbies}))

// let x = {},
//   y = { name: "Ronny" },
//   z = { name: "John" };
// x[y] = { name: "Vivek" };
// x[z] = { name: "Akki" };
// console.log(x[y]);

// function runFunc(){
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log('2' + -2 + 2);
//   console.log("Hello" - "World" + 78);
//   console.log("Hello"+ "78");
// }
// runFunc();

// // Code 3:

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));
// A

// DB
// Deepak
// 06:23 PM
// {name: 'Vivek"}
// 11
// NaN
// 2
// NaN
// Hello78
// true
// false

// DB
// Deepak
// 06:27 PM
// let arr = [1, 2]

// let a = arr[0]
// let b = arr[1]
// const[a, b] = arr


function groupByProperty(arr, property) {
	const grouped = {};
	arr.forEach((obj) => {
	  const propValue = obj[property];
	  if (!grouped[propValue]) {
		grouped[propValue] = [];
	  }

	  grouped[propValue].push(obj);
	});
	return grouped;
  }
  
//   // Example usage:
//   let data = [
// 	{ id: 1, category: "A", value: "apple" },
// 	{ id: 2, category: "B", value: "banana" },
// 	{ id: 3, category: "A", value: "avocado" },
// 	{ id: 4, category: "B", value: "blueberry" },
// 	{ id: 5, category: "C", value: "cherry" },
//   ];
  
//   let groupedByCategory = groupByProperty(data, "category");
//   console.log(groupedByCategory);
  