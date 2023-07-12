const n1 = prompt("Enter the first number: ");
const n2 = prompt("Enter the Second number: ");
function gcd(n1,n2){
    var gcd = 0;
    for(var i=0; i<=n1 && i<=n2; i++){
        if(n1 % i == 0 && n2 % i == 0){
            gcd = i;
        }
    }
    console.log("Greatest Common Divisor of " + n1 + " and " + n2 + " is: " + gcd);
}

gcd(n1,n2);
