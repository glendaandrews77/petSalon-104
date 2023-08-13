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
function displayPetCards() {
    const petsDiv = document.getElementById("pets");
    petsDiv.innerHTML = ""; // Clear previous content

    for (let i = 0; i < PetSalon.pets.length; i++) {
        const pet = PetSalon.pets[i];
        petsDiv.innerHTML += `
            <div class="pet-card">
                <h3>${pet.name}</h3>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <button class="delete-button" onclick="deletePet(${i});">Delete</button>
            </div>
        `;
    }
}
function displayTable() {
    const petsTable = document.getElementById("pets-table");
    petsTable.innerHTML = ""; // Clear previous content

    for (let i = 0; i < PetSalon.pets.length; i++) {
        const pet = PetSalon.pets[i];
        const row = petsTable.insertRow();

        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const genderCell = row.insertCell(2);
        const breedCell = row.insertCell(3);
        const serviceCell = row.insertCell(4);
        const actionCell = row.insertCell(5);

        nameCell.textContent = pet.name;
        ageCell.textContent = pet.age;
        genderCell.textContent = pet.gender;
        breedCell.textContent = pet.breed;
        serviceCell.textContent = pet.service;
        actionCell.innerHTML = `<button class="delete-button" onclick="deletePet(${i});">Delete</button>`;
    }
}
function deletePet(index) {
    PetSalon.pets.splice(index, 1);
    displayPetCards();
    displayTable();
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
    
// Stripe payment processing script
    const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
    const elements = stripe.elements();
    const card = elements.create('card');
    card.mount('#card-number');

    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const { token, error } = await stripe.createToken(card);
        if (error) {
            console.error(error);
        } else {
            // Send the token to your server for processing
            // You can use Fetch API or other methods to send data
            const response = await fetch('/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token.id }),
            });
            if (response.ok) {
                // Payment successful, display a success message
                alert('Payment successful!');
            } else {
                // Payment failed, display an error message
                alert('Payment failed. Please try again.');
            }
        }
    });


// // Call the reset function when the Reset button is clicked
// document.getElementById('resetBtn').addEventListener('click', function () {
//     reset();
// });




// // Call the reset function when the Reset button is clicked
// document.getElementById('resetBtn').addEventListener('click', function () {
//     reset();
// });


document.getElementById('bookingBtn').addEventListener('click', function () {

});


function init(){
    let taco = new Pet("Taco", 2, "female", "chihuahua", "grooming");
    let jaboi = new Pet("Jaboi", 4, "male", "jack russell", "nail trimming");
    let coco = new Pet("Coco", 6, "female", "weener dog", "grooming");
    let vanny= new Pet("Vanny", 15, "male", "chihuahua", "deluxe");

    PetSalon.pets.push(taco,jaboi,coco,vanny) //pets names
    
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

  