const str = prompt("Enter a string");

function noOfWords(str){
    var num = 0;
    for(var i=0;i<str.length;i++){
        if(str[i] === " "){
            num++;
        }
    }
    return num+1;
}

console.log(noOfWords(str));