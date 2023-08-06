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
    pets:[//petSalon.pets.name
        {
            name:"Taco",
            age:4,
            gender:"female",
            service:"Grooming",
        },
        {
        name: "Lovey",
        age: 15,
        gender: "Female",
        service:"Nail cut",
        }
    
    ]
}

function displayPetName(){
        const petsDiv = document.querySelector("#pets");
        for (let i = 0; i < PetSalon.pets.length; i ++) {
            petsDiv.innerHTML +=` 
            <li> ${PetSalon.pets[i].name}
            </li>`;

        }

}
function init(){
    displayPetName();
}
//waiting to render the html
window.onload=init;
