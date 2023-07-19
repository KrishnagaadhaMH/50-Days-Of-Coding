// You are given an array of objects representing votes in an election. Each object contains a candidate's name. Your task is to calculate the total number of votes each candidate received.
// Sample test cases I/o
// const votes = [
//   { candidate: "Alice" },
//   { candidate: "Bob" },
//   { candidate: "Alice" },
//   { candidate: "Charlie" },
//   { candidate: "Alice" },
//   { candidate: "Bob" },
// ];
// Output:
// {
//   Alice: 3,
//   Bob: 2,
//   Charlie: 1,
// }



const votes = [{ candidate: "Alice" },{ candidate: "Bob" },{ candidate: "Alice" },
{ candidate: "Charlie" },{ candidate: "Alice" },{ candidate: "Bob" },];
var ac = bc = cc = 0;
function total(votes){
    votes.forEach(vote => {
        if(vote.candidate == "Alice"){
            ac++;
        }
        else if(vote.candidate == "Bob"){
            bc++;
        }
        else if(vote.candidate == "Charlie"){
            cc++;
        }
    });

    const obj = {
        "Alice": ac,
        "Bob": bc, 
        "Charlie": cc, 
      };
      return obj;
}
   
console.log(total(votes)); 