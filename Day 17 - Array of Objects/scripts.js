
function age(data){
    data => {
        const names = [];
        age = data.age
        for (let i = 0; i < len; i++) {
            if ((data[i].age >+ 20 && data[i].age<= 30)) {
              names.push(data[i].name)
            }
        }
        return names;
    }
    return age;
}

const data = [
    { name: 'Krishna', age: 25 },
    { name: 'Kavya', age: 19 },
    { name: 'Gaadha', age: 32 },
    { name: 'Keshav', age: 22 }
];

console.log(age(data));