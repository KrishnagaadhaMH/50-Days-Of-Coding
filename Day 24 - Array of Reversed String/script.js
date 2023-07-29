var arr = prompt("Enter an array of Strings");
arr = arr.split(" ");
var rev, newarr = [];
function reversedString(arr){
    for(var str of arr){
        rev = str.split('').reverse().join('');
        newarr.push(rev);
    }
    return newarr;
}
console.log(reversedString(arr));