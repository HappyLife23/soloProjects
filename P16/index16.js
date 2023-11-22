// array.forEach() = executes a provided callback function 
//                  once for each array alement. 


let students = ["david", "sofie", "patrik"];

students.forEach(capitalize);
students.forEach(print);


function capitalize(element, index, array) {

    // koden nedans uppgift är att förstora
    // första bokstaven
    array[index] = element[0].toUpperCase() + element.substring(1);

}

function print(element) {
    console.log(element);
}