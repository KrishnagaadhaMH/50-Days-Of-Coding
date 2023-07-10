const n = prompt("Enter a number :");
let count = 0;
function perfectNo(num){
    for(var i = 0;i < num;i++){
        if(num % i == 0){
            count+=i;
        }
    }
    if(num == count)
        console.log(num + " is a Perfect Number");
    else    
        console.log(num + " is not a Perfect Number");

}
perfectNo(n);