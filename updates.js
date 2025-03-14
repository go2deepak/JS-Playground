****************Anagram*************************

function anagram(str1, str2){
    if(str1.length !== str2.length) return false
    let count = {}
    for(let i = 0; i< str1.length; i++){
        count[str1[i]] = (count[str1[i]] || 0) + 1
    }
    for(let i = 0; i< str2.length; i++){
        if(!count[str2[i]]) return false

        count[str2[i]]++
    }
    return true
}

console.log(anagram('hello', 'ollem'));

*******************Palidrome****************************

function pali(str){
    for(let i = 0; i< str.length; i++){
        if(str[i] !== str[str.length -i -1] ) return false
    }
    return true
}

console.log(pali('lejjjvel'));


*****************Fibonacii*******************************

function fibonaci(n){
    let a = 0
    let b = 1
    let stack = []

    for(let i = 0; i< n; i++){
        stack.push(a)
        let next = a + b
        a = b
        b = next
    }
    return stack
}   

console.log(fibonaci(9));

function nthFibo(n){
    if(n === 1) return 1
    if(n === 0) return 0
    return nthFibo(n-1) + nthFibo(n-2)
}

console.log(nthFibo(5));


**************************longestSubstring*****************************************

function longestSubstring(str){
    let left = 0;
    let right = 0
    let maxLength = 0
    let set = new Set()

    while(right < str.length){
        let letter = str[right]
        if(!set.has(letter)){
            set.add(letter)
            maxLength = Math.max(maxLength, set.size)
            right++
        } else{
            set.delete(str[left])
            left++
        }
 
    }
    return [maxLength, char]
}

console.log(longestSubstring('abba'));

function longestSubstring(str){
    let left = 0;
    let right = 0
    let maxLength = 0
    let set = new Set()

    while(right < str.length){
        let letter = str[right]
        if(!set.has(letter)){
            set.add(letter)
            if(right -left  + 1 > maxLength){
                maxLength = right -left + 1
                char = str.slice(left, right + 1)

            }
            right++
        } else{
            set.delete(str[left])
            left++
        }
 
    }
    return [maxLength, char]
}

console.log(longestSubstring('abba'));

******************************Valid Parenthisis******************************

function valid(str){
    let stack = []

    for(let i = 0; i< str.length; i++){
        if(str[i] === '('){
            stack.push(')')
        } else if (str[i] === '['){
            stack.push(']')
        } else if(str[i] === '{'){
            stack.push('}')
        } else if ( stack.length == 0 || str[i] !== stack.pop()){
            return false
        }
    }
    return stack.length === 0
}

console.log(valid('{[()]}'));


*************************Move all zeros to right****************************

function moveAllZero(arr){

    let noneZeroIndex = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0){
            [arr[noneZeroIndex], arr[i]] = [ arr[i], arr[noneZeroIndex]]
            noneZeroIndex++
        }
    }
    return arr

}

console.log(moveAllZero([1,2,0,3,4,0, 6,8]));


************************all SubArrays *******************************

function allSubArray(arr){
    for(let i = 0; i< arr.length; i++){
        let subArray = []
        for(let j = i; j< arr.length; j++){
            subArray.push(arr[j])
            console.log(subArray);
            
        }
    }

}

allSubArray([1,2,3,4])

*************** Sub array of given size******************************

 function subArraySize(arr, z){
    let stack = []
    for(let i = 0; i<= arr.length -z; i++){
        let subArr = arr.slice(i, i+ z)
        stack.push(subArr)
    }
    return stack
 }

 console.log(subArraySize([1,2,3,4,56], 3));


*************FlattenArray***********************************

function flat(arr){
    let stack = []

    for(let i = 0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            stack = stack.concat(flat(arr[i]))
        } else{
            stack.push(arr[i])
        }
    }
    return stack
}

console.log(flat([12,4,[3,[5]]]));

************************Sort an array************************************

function sortArray(arr){
    for(let i = 0; i< arr.length; i++){
        for(j = 0; j< arr.length; j++){
            if(arr[j] > arr[j+1]){
                // temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp

                // or 

                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(sortArray([2,4,1,4,6]));

************************Reduce Method example**************************


let arr = [1,2,3,4,6]

let result = arr.reduce((acc, curItem) => acc + curItem)


**************Flatten an Object***********************************************

var obj = {
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

  function flatObj(obj){
    let result = {}
    for(let item in obj){
        if(typeof obj[item] === 'object'){
           let myResult =  flatObj(obj[item])
           Object.assign(result, myResult)
        } else{
            result[item ] = obj[item]
        }
    }
    return result
}

console.log(flatObj(obj));

function flatObj(obj, prefix = ''){
    let result = {}
    for(let item in obj){
        if(typeof obj[item] === 'object'){
           let myResult =  flatObj(obj[item],  prefix + item + '_')
           Object.assign(result, myResult)
        } else{
            result[ prefix + item ] = obj[item]
        }
    }
    return result
}

console.log(flatObj(obj));


  let data = [
	{ id: 1, category: "A", value: "apple" },
	{ id: 2, category: "B", value: "banana" },
	{ id: 3, category: "A", value: "avocado" },
	{ id: 4, category: "B", value: "blueberry" },
	{ id: 5, category: "C", value: "cherry" },
  ];

  data.forEach(obj => {
    if(!obj.category){
        obj.category = []
    } else {
        obj.category  = [obj]
    }
  })

  console.log(data);

function groupBy(arr, property){
    let result = []
    arr.forEach((obj) => {
        let propValue = obj[property]
        if(!result[propValue]){
            result[propValue] = []
        } result[propValue].push(obj)
    })
    return result
}

console.log(groupBy(data, 'category'));

let output = data.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = []; 
  }
  acc[item.category].push(item); 
  return acc; 
}, {});


***************************Pair ********************************

function pair(arr, target) {
    let obj = {}

    for(let num of arr){
        let complement = target - num
        if(obj[complement]){
            return [complement, num]
        }
        obj[num] = true
    }
    return null
}

console.log(pair([1,2,3,12,4,5], 9));


**************************Debouncing***************************************

function debounce (func, delay = 3000){
    let timer 

    return function (...args){
        clearTimeout(timer)
       timer =  setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

function fetchResults() {
    console.log("Fetching input suggestions");
  }
  const processChange = debounce(() => fetchResults());

  processChange()

***********************Throttling*******************************

function throttling(func, limit){
    let inThrottle
    return function (...args){
        if(!inThrottle){
            func.apply(this, args)
            inThrottle = true
            setTimeout(() => {
                inThrottle = false
            }, limit)
        }
    }
}

*****************************Memoization****************************

const memoizeAddition = () => {
    let cache = {};
    return (value) => {
      if (value in cache) {
        console.log("Fetching from cache");
        return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      } else {
        console.log("Calculating result");
        let result = value + 20;
        cache[value] = result;
        return result;
      }
    };
  };
  returned function from memoizeAddition
  const addition = memoizeAddition();
  console.log(addition(20)); //output: 40 calculated
  console.log(addition(20)); //output: 40 cached


  function memo(){
    let cache = {}

    return (value) => {
        if(value in cache){
            return cache[value]
        } else{
            let result = value + 20
            cache[value] = result
            return result
        }
    }
  }


***********************Closure*****************************************

function closure(){
    let count = 5

    return {
        increament: function (){
           return  ++count
        },
        decreament: function (){
            return --count
        }

    }
}

let result = closure()

console.log(result.decreament());
console.log(result.decreament());


****************************Function Currying***************************

const filterBy = key => value => array => array.filter(item => item[key] === value);

const filterByCategory = filterBy("category");
const electronics = filterByCategory("electronics")([
    { name: "Laptop", category: "electronics" },
    { name: "mobile", category: "electronics" },
    { name: "Shirt", category: "clothing" }
]);
console.log(electronics); // [{ name: "Laptop", category: "electronics" }]



  




 





