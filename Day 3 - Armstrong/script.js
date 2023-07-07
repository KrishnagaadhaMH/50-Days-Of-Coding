var num = prompt("Enter a number to check whether it is Armstrong");
var n = num.length;
var temp = num;
var sum = 0;

while(temp!=0){
    const rem = temp % 10;
    sum += Math.pow(rem,n);
    temp = parseInt(temp/10);
    // console.log(rem,sum,temp);
}
if(sum == num)
    console.log(num + " is an Armstrong number");
else
    console.log(num + " is not an Armstrong number");

