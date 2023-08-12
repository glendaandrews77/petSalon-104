

function displayPetCards() {
    let card = "";
    // Travel the array PetSalon.pets
    for (let i = 0; i < PetSalon.pets.length; i++) {
        let pet = PetSalon.pets[i];
        // Create the card html
        card += `
            <div id="${pet.id}" class="pet-card">
                <h5>${pet.name}</h5>
                <p>${pet.age}</p>
                <p>${pet.breed}</p>
                <p>${pet.gender}</p>
                <p>${pet.service}</p>
                <button onclick="deletePet(${pet.id})">Delete</button>
            </div>
        `;
    }
    console.log(card);

    const DIV = document.getElementById("pets");
    DIV.innerHTML = card;
    // Display the cards into the HTML


    // Update number of pets
    displayNumberOfPets();
}

function displayNumberOfPets() {
    // Display the updated value (PetSalon.pets.length)
    const SUP = document.getElementById("numberPets");
    SUP.innerHTML = PetSalon.pets.length;
}

function displayTable() {
    let table = "";
    for (let i = 0; i < PetSalon.pets.length; i++) {
        console.log(PetSalon.pets[i].name);
        let tablePet = PetSalon.pets[i];
        table += `
            <tr class="pet">
                <td>${tablePet.name}</td>
                <td>${tablePet.age}</td>
                <td>${tablePet.gender}</td>
                <td>${tablePet.breed}</td>
                <td>${tablePet.service}</td>
            </tr>
        `;
    }
    document.getElementById('pets-table').innerHTML = table;
}

