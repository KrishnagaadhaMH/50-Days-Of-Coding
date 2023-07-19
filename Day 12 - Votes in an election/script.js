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