// let arr = [2, 9, 0, 6, 34, 0, 1, 2, 0, 8];

// function move(arr){
//   let nonzeroindex = 0

//   for(let i =0; i<arr.length; i++){
//     if(arr[i] !== 0){
//       [arr[nonzeroindex], arr[i]] = [arr[i], arr[nonzeroindex]]
//   nonzeroindex++

//     }
//   }
//   return arr
// }

// console.log(move(arr));

// let data = [
//   	{ id: 1, category: "A", value: "apple" },
//   	{ id: 2, category: "B", value: "banana" },
//   	{ id: 3, category: "A", value: "avocado" },
//   	{ id: 4, category: "B", value: "blueberry" },
//   	{ id: 5, category: "C", value: "cherry" },
//     ];

// function groupBy(arr, property){
//   let grouped = {}
//   arr.forEach(obj => {
//     let propValue = obj[property]
//     console.log(propValue);
    
//     if(!grouped[propValue]){
//       grouped[propValue] = []
//     }
//     grouped[propValue].push(obj)
//   });
//   return grouped
// }

// groupBy(data, 'category')


// let arr = [1,2,3,-4,5,5,-6,3]

// function max(arr){
//   let curr = 0
//   let max = 0
//   for(let i=0; i< arr.length; i++){
//     curr = curr + arr[i]
//     if(curr>max){
//       max = curr
//     }
//   }
//   return max
// }

// console.log(max(arr));

// let str = '(())';

// function valid(str){
//   let count = 0
//   for(let i =0; i< str.length; i++){
//     if(str[i] === '[' || str[i]=== '{' || str[i] === '('){
//       count ++
//     } else
//       count --
//     }

//     if(count <0){
//       return false
//     }
//     return count === 0
//   }
 


// console.log(valid(str));

// function isValid(str){
//   let stack = []

//   for(let i = 0; i<str.length; i++){
//       if(str[i] === '('){
//           stack.push(')')
//       }else if(str[i] === '['){
//           stack.push(']')
//       }else if(str[i] === '{'){
//           stack.push('}')
//       }else if(str[i] !== stack.pop()){
//           return false
//       }
//   }
//   return stack.length === 0
// }
// // console.log(isValid(str));
// let str2 = 'Hello'
// function rev(str2){
//   let rev = ''
//   for(let i = str2.length -1; i>= 0; i--){
//     rev = rev + str2[i]
//   }
//   return rev
// }
// console.log(rev(str2));


// let sentence = 'I am a good boy'

// function revS(sentence){
//   let newSentece = sentence.split(' ')
//   let new1 = newSentece.map((word) => word.split('').reverse().join(''))
//   let result = new1.join( ' ')
// }

// const arr = [1,2,[4,[5]]]

// function flatten(arr){
//   let newArr = []
//   for(let i = 0; i< arr.length; i ++){
//     if(Array.isArray(arr[i])){
//       newArr = newArr.concat(flatten(arr[i]))
//     } else {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(flatten(arr));

// let arr2 = [1,2,2,3,4,3,3]

// function removeDupl(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) == index)
// }
// // console.log(removeDupl(arr2));

// function removeB(arr2) {
//   let uniq = []
//   for(let i = 0; i<arr2.length; i++){
//     if(uniq.indexOf(arr2[i]) === -1){
//       uniq.push(arr2[i])
//     }
//   }
//   return uniq
// }

// // console.log(removeB(arr2));


// function debounce(func, delay){
//  let timeoutId
//  return function(...args){
//   clearTimeout(timeoutId)
//   setTimeOut(()=>{
//     func.apply(globalThis, args)
//   }, delay)
//  }
// }

// function throttle(func, limit){
//   let inThrottle
//  return function (...args){
//   if(!inThrottle){
//     func.apply(this, args)
//     inThrottle = true
//     setTimeout(() =>{
//       inThrottle = false
//     }, limit)
//   }
//  }
// }

// function remove (arr) {
//   let uniq = []
//   for(let i = 0; i< arr.length; i++){
//     if(uniq.indexOf(arr[i]) === -1){
//       uniq.push(arr[i])
//     }
//   }
//   return uniq
// }

// console.log(remove([1,4,5,5, 5,6,2,3,3,3]));

// function duplicate(arr){
//   let newArr = []
//   for(let i = 0; i< arr.length; i++){
//     for(let j = i +1; j< arr.length; j++){
//       if(arr[i] === arr[j] && !newArr.includes(arr[i])){
//         newArr.push(arr[i])
//       }
//     }
//   }
//   return newArr
// }

// console.log(duplicate([1,4,5,5, 5,6,2,3,3,3]));

// function palidrom(number){
//   for(let i = 0; i< arr.length/2; i++){
//     if(arr[i] !== arr[arr.length - 1 -i ])
//   }
// }

// let obj = {
//   name: 'Deepak',
//   age: '34',
//   food: 'nonveg'
// }

// for(key in obj){
//   console.log(key);
//   console.log(obj[key]);
  
  
// }


// let arr = [1,2,3,4,56]
// console.log(arr.sort((a,b) => b-a));
// console.log(isNaN(5));

function pali(str){
    for(let i = 0; i< str.length; i++){
        if(str[i] !== str[str.length -1 -i]){
            return false
        }
    }
    return true
}

// console.log(pali('radafr'));

function fact(num){
    if(num === 0 || num === 1){
        return 1
    }
    else{
        return num * fact(num -1)
    }
}

// console.log(fact(4));


function isPerfectSquare(num){
    let s  = parseInt(Math.sqrt(num))
    return (s * s === num)
}

function isFabo(n) {
    return isPerfectSquare(5*n*n + 4) || isPerfectSquare(5*n*n - 4)
}

function checkFibo(){
    if(isFabo){
        console.log('fibo');
        
    }else{
        console.log('not fibo');
        
    }
}

function printAllSubArray(arr){
    for(let i = 0; i< arr.length; i++){
        let subArray = []
        for(j = i; j< arr.length; j++){
            subArray.push(arr[j])
            console.log(subArray);
            
        }
    }
}

// printAllSubArray([1,2,3])

function printAllSubarray2(arr){
    for(let i = 0; i< arr.length; i++){
        for(let j = i; j< arr.length; j++){
            let subArr = arr.slice(i, j+1)
            console.log(subArr);
            
        }
    }
}

// printAllSubarray2([1,2,3,4,5])

function subArrayOfGivenSize(arr, z){
    const subArray = []
    for(let i = 0; i<=arr.length -z; i++){
        
        subArray.push(arr.slice(i, i+z))
    }
    return subArray
}

// console.log(subArrayOfGivenSize([1,2,3,4,5], 3));


function findSubarrays(arr, subarraySize) {
    const subarrays = [];
    for (let i = 0; i <= arr.length - subarraySize; i++) {
        subarrays.push(arr.slice(i, i + subarraySize));
    }
    return subarrays;
}

// console.log(findSubarrays([1,2,3,4,5], 3));

function maxOfSubarrays(arr, k) {
    const result = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];
        
        for (let j = 1; j < k; j++) {
            if (arr[i + j] > max) {
                max = arr[i + j];
            }
        }

        result.push(max);
    }

    return result;
}

// Example usage:
const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const result = maxOfSubarrays(array, k);

console.log(`Maximum of all subarrays of size ${k}:`, result);
