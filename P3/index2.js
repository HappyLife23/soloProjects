/*
En aritmetisk uttryck är en kombination av 
operander (värden, variabler, etc.) och 
operatorer (+ - * / %) 
som kan utvärderas till ett värde.
ex. y = x +5;

*/

let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;

console.log(students);

let extraStudents = students % 3;

students += 1;
students -= 1;
students *= 2;
students /= 2;

console.log(extraStudents);

/* Operatorprioritet 

1. parenthesis ()
2. exponents 
3. multiplications and division
4. addition and subtraction

*/

let result = (1 + 2) * (2 + 3);

console.log(result);