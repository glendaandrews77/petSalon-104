//object literal:
//name, address{}, address, tel, hours{open and closing}, pet[]{}

let PetSalon = {
    name:"The fashion pet",
    tel: "303-939-9393",
    hours:{
        open: "9:00 am",
        close: "5:00 pm",
    },
    address: {
        city:"Temecula",
        street:"23 Jones Street",
        zipcode:"23433"
    },
    pets:[]

}

//constructor
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.services=service;

}

function displayPetName(){
        const petsDiv = document.querySelector("#pets");
        petsDiv.innerHTML+""; //Clear previous list
        for (let i = 0; i < PetSalon.pets.length; i++) {
            petsDiv.innerHTML +=`<li> ${PetSalon.pets[i].name} </li>`;
        }
}

//Get the inputs{}
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let.inputService = document.getElementById("txtService");

function register(){
  //Create the new pet

let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value,
inputGender.value, inputBreed.value, inputServices.value);

//  Add selected service to the pet
newPet.services.push(inputService.value);




//Push the new pet
PetSalon.pets.push(newPet);
console.log(PetSalon.pets);

//Clear the form inputs
function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";

}
function deletePet(aPetID){

    console.log("Deleting the pet" + aPetID);
    document.getElementById(a.getElementById).removeAttribute();
    for(let i=0; i<PetSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;
        }
    }
}

inputName.focus();

 // Refresh the pets list
 displayPetName();

 console.log(PetSalon.pets);
}
function init(){
    //create the pets objects

    let taco = new Pet ("Taco",2,"female","Chihuahua",Grooming);
    console.log(taco);
    let lovey = new Pet ("Lovey",3,"female","Chihuahua",Grooming);
    console.log(lovey);
    let jaboi = new Pet ("JaBoi",4,"male","JackRussel",Grooming);
    console.log(jaboi);
    PetSalon.pets.push(taco,lovey,jaboi);
    console.log(PetSalon.pets);

}
//waiting to render the html
window.onload=init;
