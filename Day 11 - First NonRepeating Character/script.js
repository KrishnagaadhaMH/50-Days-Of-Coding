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
