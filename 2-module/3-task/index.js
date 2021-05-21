let sum = 0;
let mul = 0;
let calculator = {
  one:0,
  two:0,
  read:function(a,b){
    calculator.one = a;
    calculator.two = b;
  },
  sum:function(){
    sum = calculator.one + calculator.two;
    return sum;
  },
  mul:function(){
    mul = calculator.one * calculator.two;
    return mul;
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
