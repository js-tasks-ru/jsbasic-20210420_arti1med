function factorial(n) {
    let factorialNumber = n;
    for (let i =1;i<n;i++){
      factorialNumber *= (n-i);
    }
    return factorialNumber;
}

