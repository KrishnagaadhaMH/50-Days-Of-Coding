function getHighestScore(people) {
    var res;
    let max = 0 ;
    people.forEach((person) => {
        const name = person.name;
        const score = person.score;
        if(score>max){
            max = score;
            res = name;
        }
    });
    return res;
  }
  
  const people = [
    { name: 'Harry', score: 16 },
    { name: 'Ron', score: 20 },
    { name: 'Charlie', score: 24 },
    { name: 'Flynn', score: 24.5 },
    { name: 'Eva', score: 3 }
  ];
  
  console.log(getHighestScore(people));