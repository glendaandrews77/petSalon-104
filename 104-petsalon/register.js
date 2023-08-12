//object literal:
//name, address{}, address, tel, hours{open and closing}, pet[]{}

let PetSalon = {
    name:"The Fancy Pancy Pet Spa",
    tel: "757-4975621",
    hours:{
        open: "9:00 am",
        close: "5:00 pm",
    },
    address: {
        city:"Virginia Beach",
        street:"25252 Loving Pets Lane",
        zipcode:"23462"
    },
    pets:[]
};

//constructor
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
function displayPetName(){
    const petsDiv = document.querySelector("#pets-name");
    for (let i = 0; i < PetSalon.pets.length; i ++) {
        petsDiv.innerHTML +=` <li> ${PetSalon.pets[i].name}</li>`;
    }
}


//Get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function isValid(thePet){
    let validation = true;

    if(thePet.name==""){
        //the pet is not valid
        validation=false;
        inputName.classList.add("error");
        }


        return validation;
}

function register(){ 
    //create the new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value,inputService.value);

        if(isValid(newPet)==true){

        //push the new pet
        PetSalon.pets.push(newPet);

        // display the updated list of pets
        displayPetCards();

        //clear the form fields
        reset();   
    }
} 
  

function reset(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}
    
// // Call the reset function when the Reset button is clicked
// document.getElementById('resetBtn').addEventListener('click', function () {
//     reset();
// });

// // Display an alert when the Booking Now button is clicked
// document.getElementById('bookingBtn').addEventListener('click', function () {
//     alert('Booking has been confirmed! Thank you.');
// });


function init(){
    let taco = new Pet("Taco", 2, "female", "chihuahua", "grooming");
    let jaboi = new Pet("Jaboi", 4, "male", "jack russell", "nail trimming");
    let coco = new Pet("Coco", 6, "female", "weener dog", "grooming");
    PetSalon.pets.push(taco,jaboi,coco,) //pets names
    
    displayPetName();
    displayPetCards();
    displayTable();
}   



// document.getElementById('resetBtn').addEventListener('click', function () {
//     reset();
// });

// document.getElementById('bookingBtn').addEventListener('click', function () {
//     alert('Booking has been confirmed! Thank you.');
// });

//waiting to render the html
window.onload=init;

  