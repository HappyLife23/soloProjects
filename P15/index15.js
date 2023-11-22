// callback = a function passed as an argument 
//            to another function

// Ensures that a function is not going to run 
// befor a task is completet.
// helps us develop asynchronous code.
// (when one function has to wait for another function)
// that helps us to avoid errors and potential problems. 
// ex. wait for a file to load. 

// Ett sätt: att lösa som är inte så bra

/*let total = sum(2, 3);
//displayConsole(total);
displayDom(total);

function sum(x, y) {
    let result = x + y;
    return result
}
*/

// Andra sättet som är mer effektivt    


sum(2, 3, displayDom)

function sum(x, y, callBack) {
    let result = x + y
    callBack(result);
}

function displayConsoled(output) {
    console.log(output)
}

function displayDom(output) {
    document.getElementById("myLabel").innerHTML = output;
}



const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept)

function removeElement(newArr) {
    newArr.pop();
}
removeElement(concept);
console.log(concept)