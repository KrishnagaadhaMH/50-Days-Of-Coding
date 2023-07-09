const num = prompt("Enter a number as limit: ");
var sum = 0;
function prime(num){
    for(var i = 2; i < num; i++){
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 2; i <= num; i++){
    if(prime(i))
        sum += i;
}
console.log(sum);