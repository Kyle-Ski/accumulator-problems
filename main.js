/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been completed for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/
function sum(arry){
    var accum = 0
    if (arry === []){
        return 0
    } else {
        for (let index = 0; index < arry.length; index++) {
            accum += arry[index]
        }
        return accum
    }
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(string){
    var accum = ''
    for (let index = 0; index < string.length; index++) {
        accum += string[index] + string[index]
    }
    return accum
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(arry){
    let accum = []
    for (let index = 0; index < arry.length; index++) {
        accum.push(arry[index] * 2)
    }
    return accum
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(array, num){
    var accum = []
    for (let index = 0; index < array.length; index++) {
        accum.push(array[index] * num)
    }
    return accum
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/


function interleave(array1, array2){
    var arrayIndex
    var interleavedArray = []
    if (typeof array1 === 'object' && typeof array2 === 'object'){
        for (arrayIndex = 0; arrayIndex < array1.length; arrayIndex++){
            interleavedArray.push(array1[arrayIndex], array2[arrayIndex])
        }    
    }
    else {
        return []
    }
    return interleavedArray
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/


function createRange(number, defValue){
    var accum = []
    if (defValue === undefined){
        return []
    } else {
        for (let index = 0; index < number; index++) {
            accum.push(defValue)  
        }
        return accum
    }
}
// console.log(createRange(3, 'hi'))




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array){
    accum = {}
    for (let index = 0; index < array.length; index++) {
        accum[array[index]] = index
    }
    return accum
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(array){
    var accum = {}
    for (let index = 0; index < array.length; index++) {
        var nestedArray = array[index]
        for (let j = 0; j < nestedArray.length - 1; j++) {
            accum[nestedArray[j]] = nestedArray[j + 1]            
        }
        
    }
    return accum
}

// console.log(arraysToObject([[2014, "Horse"], [2015, "Sheep"]]))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString(string){
    var accum = ''
    for(let i = string.length - 1; i >= 0; i--){
        accum += string[i]
    }
    return accum
}
// console.log(reverseString('hello'))









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string){
    if (string === ''){
        return true
    } else if (string.slice(string.length / 2) === string.slice(0,string.length /2)){
        return true
    }else if (string.length % 2 !== 0){
        return false
    } else {
        return false
    }
}
// console.log(repeats('racrac'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string){
    var accum = ''
    for(let i = 0; i < string.length; i += 2){
        accum += string[i]
    }
    return accum
}
// console.log(everyOther('abcdefg'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/
function allEqual(string){
    var compare = string[0]
    if (string === ''){
        return true
    } else {
        for(var i = 1; string[i] === compare; i++){
            // console.log(i)
        }
        if (i !== string.length){
            return false
        } else {
            return true
        }
        // for(let i = 0; i < input.length; i++){
        //     if (input[i] !== input[0]){
        //           return false
        //     } 
        // }
        // return true
    
    }
}
// console.log(allEqual('ggggh'))




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 12
*/

function sumLetters(string){
    if (string === ''){
        return 0
    } else {
        var numberArray = string.split('')
        var sum = 0
        for(let i = 0; i < numberArray.length; i++){
            sum += parseInt(numberArray[i])
        }
        return sum
    }
}
// console.log(sumLetters('89'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(string){
    var count = 0
    var stringArray = string.split('')
    for(let i = 0; i < stringArray.length; i++){
        switch(stringArray[i]){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
            default:

        }
    }
    return count
}
// console.log(countVowels('goosebumps'))







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string){
    var arr = []
    if (string === ''){
        return arr
    } else {
        for(let i = 0; i < string.length; i++){
            arr.push(string[i])
        }
        return arr    
    }
}
// console.log(split('you'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string){
    var arr = []
    if (string === ''){
        return arr
    } else {
        for (let i = 0; i < string.length; i++){
            arr.push(string.codePointAt(i))
        }
    }
    return arr
}
// console.log(getCodePoints('the'))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(string){
    var obj = {}
    if (string === ''){
        return obj
    } else {
        for (let i = 0; i < string.length; i++){
            obj[string[i]] = i
        }
        return obj    
    }
}
// console.log(letterMap('hello'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string){
    var obj = {}
    if (string === ''){
        return obj
    } else {
        var stringArray = string.split('')
        for (let i = 0; i < stringArray.length; i++){
            if (obj.hasOwnProperty(stringArray[i])){
                obj[stringArray[i]] += 1
            } else {
                obj[stringArray[i]] = 1
            }
        }
        return obj    
    }
}
// console.log(letterCount('hello'))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/


function threeOdds(num1, num2){
    var countOdds = 0
    for(let i = num1 + 1; i < num2; i++){
        if (i % 2 !== 0){
            countOdds++
        }
    }
    if(countOdds >= 3){
        return true
    } else {
        return false
    }
}
// console.log(threeOdds(0,5))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, length, fill){
    var filler = ''
    if (string.length > length){
        return string
    } else {
        for (let i = 0; i < (length - string.length); i++){
            filler += fill
        }
        return filler + string
    }
}
// console.log(leftPad('hello', 7, '%'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(number, letter){
    var newString = ''
    for (let i = 0; i < number; i++){
        newString += letter
    }
    return newString
}
// console.log(createString(4,'l'))


// function factorial2(num){
//     if (num === 0){
//         return 1
//     }
//     return num * factorial2(num -1)
// }
// console.log(factorial2(4))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/


function factorial(number){
    if (number === 0){
        return 1
    } else {
        for (let i = number - 1; i > 0; i--){
            number *= i
        }
        return number    
    }
}
// console.log(factorial(4))




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/
function arrayOfNumbers(number){
    var arr = []
    for (let i = 1; i <= number; i ++){
        arr.push(i)
    }
    return arr
}
// console.log(arrayOfNumbers(3))
// var str = 'hello'
// console.log([...str])

// function intenseString(str) {
    // your code here
      // if (str.slice(-3) === '!!!' && str[str.indexOf('!') + 1]==='!') {
      //     return true;
      // } else {
      //     return false;
      // }
//   return /^!(\!){0+}\!{3+}$/.test(str)
//   }
// console.log(intenseString('hello!!'))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/
function evenOdd(num1, num2){
    var obj = {}
    if((num1, num2) === 0){
        return obj
    } else {
        for (let i = num1; i <= num2; i++){
            if (i % 2 === 0){
                obj[i]= 'even' 
            } else {
                obj[i] = 'odd'
            }
        }
        return obj    
    }
}
// console.log(evenOdd(0,7))







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(number, string){
    var obj = {}
    if (number === 0){
        return {}
    } else {
        for (let index = 1; index <= number; index++) {
            obj[string.repeat(index)] = true
        }return obj
    }
}


// console.log(growingKeys(5,'d'))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/
function every(array, value){
    var count = 0

    for (let index = 0; index < array.length; index++) {
        if(array[index] === value){
            count++
        } 
    }
    if (count !== array.length ){
        return false
    } else {
        return true
    }
}
// console.log(every([1,1,1,2],1))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/
function some(array, value){
    var thing = false
        for (let index = 0; index < array.length; index++) {
            if (!(array.includes(value))) {
                thing = false
            } else {
                return thing = true
            }
        }    
    return thing
}

// console.log(some([],'e'))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/
function toSentence(array){
    var sentence = ''
    if (array === []){
        return sentence
    } else {
        for (let index = 0; index < array.length; index++) {
            if(index === array.length - 1){
                sentence += `and ${array[array.length - 1]}`
            } else {
                if (index === array.length - 2){
                    sentence += `${array[index]} `
                } else {
                    sentence += `${array[index]}, `
                }
            }
        }    
    }
    return sentence
}   
// console.log(toSentence(["a",'l', "c"]))











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array){
    let acr = ''
    for (let index = 0; index < array.length; index++) {
        let word = array[index]
        acr += word.charAt(0)
        }
    return acr
}
// console.log(acronym(["Java", "Script", "Object", "Notation"]))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(array){
    if (array === []){
        return undefined
    } else {
        array.sort(function (a, b) {  return a - b;  })
        return array[0]    
    }
}
// console.log(min([0,-3,2,5]))








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/
function index(array,property){
    let obj = {}
    for (let index = 0; index < array.length; index++) {
        let nestedObj = array[index]
        obj[nestedObj[property]] = nestedObj
    }
    return obj
}
// console.log(index([{id: 1, name: "Joe"}, {id: 2, name: "Sue"}],'name'))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(object){
    let obj = {}
    for(let key in object){
        obj[object[key]] = key 
    }
    return obj
}
// console.log(invert({id: 1, name: "Joe"}))

function repeats2(a){
    // let newarray = []
    // for (let i = 0; i < a.length; i++){
    //     newarray.push(a[i])
    //     if (newarray[i] % 2 === 0){
    //         return newarray = true
    //     } else {
    //         return true
    //     }
    // }
    if (a.length % 2 !== 0){
        return false
    } else if (a.length % 2 === 0){
        let length = a.length/2
        let front = a.slice(length) 
        let back = a.slice(-length)
        a.slice(-(a.length/2))
        console.log('this is length:', length, 'this is negative',-length)

        console.log('This is the front:',front,'\nThis is the back:',back)
    }

}
// console.log(repeats2('111222'))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(object, name){
    let newObj = {}
    for(key in object){
        let signed = `${key}-signed`
        newObj[signed] = `${object[key]} - ${name}`
    }
    return newObj
}

console.log(addSignature({"code of contract": "foo"}, "Fred"))




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of 
strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return 
["name - will", "age - 24"]
*/
function pairs(object){
    let array = []
    for(let key in object){
        array.push(key + ' - ' + object[key])
    }
    return array
}
// console.log(pairs({name: "Will", age: 24}))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum 
of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/
    function sumValues(object){
        let answer = 0
        if (object === {}){
            return answer
        } else {
            for(let key in object){
            answer += object[key]
            }
            return answer
        
        }
    }
  
// console.log(sumValues({a: 1, b: 2}))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the 
name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/
function biggestProperty(object){
    var arr = []
    for(let key in object){
        if (object.hasOwnProperty(key) === true){
            for(let key in object){
                arr.push([key, object[key]])
            }
            arr.sort(function(a, b) {return a[1] - b[1];})
            return arr[arr.length - 1][0]    
        } else {
            return undefined    
        }
    }
}

// console.log(biggestProperty({1999: 4036, 'c': 7654}))








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the 
name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(object, value){
    for (let key in object) {
        if (object[key] === value) {
            return key
        }
    }
}
// console.log(keyForValue({1999: 4036, 2000: 7654}, 4036))







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and 
returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/
function containsValue(object, value){
    var arr = []
    if (Object.keys(object).length === 0){
        return false
    } else {
        if (Object.values(object).indexOf(value) > -1){
            return true 
        } else {
            return false
        }
    } 
}
// console.log(containsValue({1999: 4036, 2000: 7654}, 7654))






//
