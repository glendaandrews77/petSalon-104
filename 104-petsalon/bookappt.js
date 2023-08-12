document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        events: [
            // Define available appointment slots here
            { title: "Available", start: "2023-08-21T09:00:00",  end: "2023-08-10T10:00:00" },
            { title: "Available", start: "2023-08-21T09:30:00",  end: "2023-08-10T10:30:00" },
            { title: "Available", start: "2023-08-21T010:00:00", end: "2023-08-10T11:00:00" },
            { title: "Available", start: "2023-08-21T010:30:00", end: "2023-08-10T11:30:00" },
            { title: "Available", start: "2023-08-21T011:00:00", end: "2023-08-10T12:00:00" },
            { title: "Available", start: "2023-08-22T011:30:00", end: "2023-08-10T12:30:00" },
            { title: "Available", start: "2023-08-21T12:00:00",  end: "2023-08-10T1:00:00" },
            { title: "Available", start: "2023-08-21T12:30:00",  end: "2023-08-10T1:30:00" },
            { title: "Available", start: "2023-08-22T2:30:00",   end: "2023-08-10T3:30:00" },
            { title: "Available", start: "2023-08-22T3:00:00",   end: "2023-08-10T4:00:00" },
            { title: "Available", start: "2023-08-23T3:30:00",   end: "2023-08-10T4:30:00" },
            { title: "Available", start: "2023-08-23T4:00:00",   end: "2023-08-10T5:00:00" },
            { title: "Available", start: "2023-08-24T4:30:00",   end: "2023-08-10T5:30:00" },
            { title: "Available", start: "2023-08-24T5:00:00",   end: "2023-08-10T6:00:00" },

            // Add more available slots as needed
        ],
    });

    calendar.render();

    // Handle form submission
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve form values
        var petName = document.getElementById("petName").value;
        var petBreed = document.getElementById("petBreed").value;
        var petAge = document.getElementById("petAge").value;
        var petGender = document.querySelector('input[name="petGender"]:checked').value;
        var isChipped = document.querySelector('input[name="isChipped"]:checked').value;
        var vaccinations = document.querySelector('input[name="vaccinations"]:checked').value;
        var ownerName = document.getElementById("ownerName").value;
        var ownerAddress = document.getElementById("ownerAddress").value;
        var ownerPhone = document.getElementById("ownerPhone").value;

        // You can now use these values to save the appointment details to your backend or perform other actions.
        // For this example, we'll just log the values to the console.
        console.log("Pet Name:", petName);
        console.log("Breed:", petBreed);
        console.log("Age:", petAge);
        console.log("Gender:", petGender);
        console.log("Is Chipped?", isChipped);
        console.log("Vaccinations:", vaccinations);
        console.log("Owner Name:", ownerName);
        console.log("Address:", ownerAddress);
        console.log("Phone:", ownerPhone);

        // Clear form after submission
        document.getElementById("booking-form").reset();
        
        
        
        

    });
});
