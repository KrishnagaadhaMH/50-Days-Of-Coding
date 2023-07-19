// Write a function that takes a string as input and returns the first non-repeating character in the string. If there are no non-repeating characters, the function should return None.
// sample I/O
// console.log(firstNonRepeatingChar("aabbccddeeff")); // null
// console.log(firstNonRepeatingChar("abcab")); // "c"
// console.log(firstNonRepeatingChar("hello world")); // "h"
// console.log(firstNonRepeatingChar("openai")); // "o"

const str = prompt("Enter a string : ");
const len = str.length;
var n=0, i ;
function firstNonRepeatingChar(str){
    for(i =0; i<len; i++,n++){
    var c = str[i]; 
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
        return c;
    }
    }
    return null;
}

console.log(firstNonRepeatingChar(str));
