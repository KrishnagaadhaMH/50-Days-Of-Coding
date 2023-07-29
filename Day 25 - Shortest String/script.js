var arr = prompt("Enter array of Strings");
arr = arr.split(" ");

function shortestString(arr){
    var s;
    let minLen = arr[0].length;
    for(let i of arr){
        if(i.length < minLen){
            minLen = i.length;
            s = i ;
        }
    }
    return s;
}
console.log(shortestString(arr));