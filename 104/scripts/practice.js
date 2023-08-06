console.log ("Practice");

//object literal
let student = {
    name:"Glenda,",
    age:46,
    grades:[10.9,8,7],
    address: {
        country: "US,",
        state:"Alabama",
        city: "Opelaka",
    }
}
//create a new object literal from yourself and console log it

let student2 ={
    name:"Van",
    age:"54",
    grades: [10,9,8,7,6],
    Country:"US",
    state: "California",
    City:"Temecula",
}
console.log(student, student2);

document.write(`

<div class= "student name">
<p>Name: ${student.name}</p>
<p>Age: ${student.age}</p><p>Country: $</p>
<p>Country: ${student2.address.country}</p>
</div>

`);




console.log(student);