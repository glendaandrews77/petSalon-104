// Pets array with three pets
const pets = [
    {
        name: 'Taco',
        age: 2,
        gender: 'Female',
        service: 'Grooming',
        breed: 'Chihuahua'
    },
    {
        name: 'Jaboi',
        age: 3,
        gender: 'Male',
        service: 'Bathing',
        breed: 'Jack Russell'
    },
    {
        name: 'Coco',
        age: 1,
        gender: 'Female',
        service: 'Trimming',
        breed: 'Weener Dog'
    }
];

// Function to display the number of registered pets
function displayTotalPets() {
    const totalPetsElement = document.getElementById('totalPets');
    totalPetsElement.textContent = pets.length;
}

// Function to display each pet's name on the HTML
function displayPetNames() {
    const petListElement = document.getElementById('petList');
    petListElement.innerHTML = ''; // Clear previous content

for (const pet of pets) {
        const listItem = document.createElement('li');
        listItem.textContent = pet.name;
        petListElement.appendChild(listItem);
    }
}

// Call the functions to display data on page load
displayTotalPets();
displayPetNames();
