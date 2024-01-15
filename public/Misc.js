// *************************Maximum Sum contigious subarray*********************************
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

// *****************************Valid Parenthisis****************************

// let str = "{[)]}";

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

// ****************Reverse letters of a word**************************************
// let str = "Hello";
// function revWord(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(revWord(str));

// **************************Reverse words of a sentence******************************

// let sentence = "Hello! How are you";

// function RevWord(str) {
//   let newS = sentence.split(" ").reverse().join(" ");
//   return newS;
// }
// console.log(RevWord(sentence));

// ********************* reverse words in a sentece , order intact************************************

// let sentence = "I am a nice boy";

// function revwordOrderSame(str) {
//   let newArr = sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""));
//   let result = newArr.join(" ");
//   console.log(result);
// }
// revwordOrderSame(sentence);

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

// ******************************Find duplicate Array***************************

// const arr = [1, 2, 1, 3, 4, 3, 5];

// const removeDup = (arr) => {
//   return arr.filter((item, index) => arr.indexOf(item) !== index);
// };

// console.log(removeDup(arr));

// *********************Flatten an Object****************************

// var nestedObject = {
//     name: "John",
//     address: {
//       city: "New York",
//       zip: "10001",
//     },
//     hobbies: {
//       play: "yes",
//       noplay: {
//         sleep: "yes",
//       },
//     },
//   };

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
// console.log(flattendObj);
