function calculateTotalCompensation(filePath) {
    return fetch(filePath)
      .then(response => response.json())
      .then(data => {
        const employees = data.employees;
        const totalCompensation = {};
  
        employees.forEach((employee) => {
          const { name, salary } = employee;
          const { baseSalary, bonus } = salary;
          const employeeCompensation = baseSalary + bonus;
  
          totalCompensation[name] = employeeCompensation;
        });
  
        return totalCompensation;
      })
      .catch(error => {
        console.error('Error:', error);
      });
}



const filePath = 'employees.json';
calculateTotalCompensation(filePath)
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error('Error:', error);
});
    