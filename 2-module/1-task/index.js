let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: true
}
let sum = 0;
function sumSalary(pay){

  for(let key in pay){
    if(!isNaN(pay[pay]) && pay[key] !== 'Infinity' && pay[key] !== '-Infinity' && Number.isInteger(pay[key])){
      sum += parseFloat(salaries[key]);
    }
  }

  return sum;
}

sumSalary(salaries);

