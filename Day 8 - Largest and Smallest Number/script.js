let arr = prompt("Enter an array of numbers: ");
arr = arr.split(" ").map(Number);
const len = arr.length;
var la = arr[0];
var sm = arr[0];
for (i=0; i<=len;i++){
    if (arr[i]>la) {
        la = arr[i];
    }
}
for (i=0; i<=len;i++){
    if(arr[i]<sm){
        sm = arr[i];
    }
}
console.log("Largest number is: "+ la +" smallest number is: "+sm);
