const num = prompt("Enter a number of terms: ");
function fibonacci(num){
var n1 = 0, n2 = 1, nextTerm,i;
if(num == 0)
    console.log("Invalid");
else if(num ==1)
    console.log(n1);
else if(num == 2){
    console.log(n1);
    console.log(n2);
}
else{
    console.log(n1);
    console.log(n2);
for(i = 2;i < num;i++){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
}
}
}
fibonacci(num);