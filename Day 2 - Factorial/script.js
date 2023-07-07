function factorial(num){
    if(num!=0){
        return num * factorial(num-1);
    }
    else {
        return 1;
    }
}
console.log(factorial(prompt("Enter a number to find the Factoral")));
