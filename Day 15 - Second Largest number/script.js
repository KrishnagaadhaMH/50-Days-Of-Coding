let input = prompt("Enter an array of numbers: ");
let arr = input.split(" ").map(Number);;
let lar = 0,sclar = 0;

function secondLargest(arr){
    for(let n of arr){
        if(n>lar){
            sclar = lar;
            lar = n;
        }
        else if (n > sclar && n !== lar) {
            sclar = n;
        }
    }
    return sclar;
}
console.log("Input array: ",arr);
console.log("Second largest number: ", secondLargest(arr));