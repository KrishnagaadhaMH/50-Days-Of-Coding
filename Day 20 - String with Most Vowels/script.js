let arr = prompt("Enter array of strings");
arr = arr.split(" ")

function vowel(str){
    let v = 0 ;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            v++;
        }
    }
    return v;
}

function mostVowels(arr){
    let vc = 0;
    let maxvc = 0;
    var res = ""; 
    for(let str of arr){
        vc = vowel(str);
        if(vc > maxvc){
            maxvc = vc;
            res = str;
        }
    }
    return res;
}

console.log(mostVowels(arr));
