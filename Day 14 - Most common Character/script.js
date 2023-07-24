const str = prompt("Enter a string:");
var mc = "";
var cha = {}, max=0;

function mostCommonChar(str){  
    for(let char of str){
      cha[char] = cha[char] + 1 || 1;
    }
  
    for(let char in cha){
      if(cha[char] > max){
        max = cha[char];
        mc = char;
      }
    }
    
    return mc;
  }
console.log(mostCommonChar(str))