/* Spread operators = allows an iterable such as an 
                    array or string to be expanded 
                    in places zero or more arguments 
                    are expected.
                    (unpack the elements)

*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let userName = ["Bro Code"];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

let class1 = ["Andy", "Maja", "Sofie"];
let class2 = ["Robert", "Sara", "David"];
class1.push(...class2)


console.log(...numbers);
console.log(...userName);
console.log(maximum);
console.log(minimum);
console.log(...class1);