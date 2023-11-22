// 2D array = An array of arrays

let fruits = ["appels", "banans", "oranges"];
let vegetables = ["carrots", "onions", "avacoda"];
let meats = ["agg", "fish", "chicken "]

let groceryList = [fruits, vegetables, meats];

// för att kunna ändra ett element i listan 
// använder vi oss av kodraden nedan. 

groceryList[0][2] = "melon"

console.log(fruits, vegetables, meats)


//För att slippa se våran element som outputen nedan
// kan vi skapa en for loop.

//(3) ['carrots', 'onions', 'avacoda'] 


for (let list of groceryList) {
    for (let food of list) {
        console.log(food)
    }

}