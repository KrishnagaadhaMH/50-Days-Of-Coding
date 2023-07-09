var n = prompt("Enter a number to be reversed: ");
var rev = 0,dig;
while(n!=0){
    dig = n % 10;
    rev = rev * 10 + dig;
    n = Math.floor(n / 10);
}
console.log(rev);


