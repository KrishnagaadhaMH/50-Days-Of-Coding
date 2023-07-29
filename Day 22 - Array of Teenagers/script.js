
function getTeenagers(people) {
    var res = [];
    people.forEach((person) => {
        const name = person.name;
        const age = person.age;
        if(age >= 13 && age <=19){
            res.push(name);
        }
      });
      return res;
  }

const people = [
    { name: 'Harry', age: 16 },
    { name: 'Ron', age: 20 },
    { name: 'Charlie', age: 18 },
    { name: 'Flynn', age: 12 },
    { name: 'Eva', age: 17 }
  ];
  
  console.log(getTeenagers(people));