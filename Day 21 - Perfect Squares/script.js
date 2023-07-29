let arr = prompt("Enter an array of numbers: ");
arr = arr.split(" ").map(Number);
var narr = [];
function perfectSquare(arr){
    for(let n of arr){
        for(let i = 1; i * i <= n; i++){
            if((n%i === 0) && (n/i === i)){
                narr.push(n);
            }
        }
    }
    return narr;
}

console.log(perfectSquare(arr));
