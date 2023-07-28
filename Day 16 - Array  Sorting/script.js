let arr = prompt("Enter an array of strings: ");
arr = arr.split(" ").map(String);

function sort(arr){
    const sorted = arr.sort((a, b) => {
        return a.localeCompare(b, undefined, {sensitivity: 'base'});
      });
    return sorted;
}


console.log(sort(arr)); 
