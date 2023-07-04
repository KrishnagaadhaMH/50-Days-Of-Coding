function Palindrome(str){
var str = str.toLowerCase();
if(str===" "){
    console.log("Empty String");
    return;
}
var i=0;
var n = str.length;
for(i;i<n/2;i++){
    if(str[i]!==str[n-1-i]){
        console.log(str + " is not a Palindrome");
        break;
    }
}
if(i== ~~(n/2+1))
    console.log(str + " is a Palindrome")
}
Palindrome('malayalam')
Palindrome('Madam')
Palindrome('Krishna')
Palindrome(' ')


