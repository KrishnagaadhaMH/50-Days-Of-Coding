let arr = prompt("Enter array of numbers");
arr = arr.split(" ").map(Number);

function sumOfSquares(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            sum += arr[i] * arr[i];
        }
    }
    return sum;
}

console.log(sumOfSquares(arr));