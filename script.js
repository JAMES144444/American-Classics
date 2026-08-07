function favoriteCar(carName) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(carName)) {
        favorites.push(carName);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(carName + " added to My Garage!");
}

    function loadGarage() {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let garage = document.getElementById("garage-cars");

    if (favorites.length === 0) {
        garage.innerHTML = "<p>Your garage is empty.</p>";
        return;
    }


  favorites.forEach(function(carName) {

    let car = cars.find(function(c) {
        return c.name === carName;
    });

    if (!car) return;

    let card = document.createElement("div");

    card.className = "car-card";

    card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">

        <h3>${car.name}</h3>

        <p><strong>Type:</strong> ${car.type}</p>

        <p><strong>Engine:</strong> ${car.engine}</p>

        <p><strong>Value:</strong> ${car.price}</p>

        <button onclick="location.href='${car.page}'">
            View Car
        </button>

        <button onclick="removeFavorite('${car.name}')">
            Remove
        </button>
    `;

    garage.appendChild(card);

});


        garage.appendChild(card);

    });

}


function removeFavorite(carName) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites = favorites.filter(function(car) {
        return car !== carName;
    });

    localStorage.setItem("favorites", JSON.stringify(favorites));

    location.reload();
}


if (document.getElementById("garage-cars")) {
    loadGarage();
}

function loadCars(){

    let carList = document.getElementById("car-list");

    if(!carList){
        return;
    }


    cars.forEach(function(car){

        let card = document.createElement("div");

        card.className = "car-card";


        card.innerHTML = `

            <img src="${car.image}">

            <h3>${car.name}</h3>

            <p>${car.type}</p>

            <p>
            <strong>Engine:</strong> ${car.engine}
            </p>

            <p>
            <strong>Value:</strong> ${car.price}
            </p>

            <button onclick="location.href='${car.page}'">
            View Car
            </button>


            <button onclick="favoriteCar('${car.name}')">
             Favorite
            </button>

        `;


        carList.appendChild(card);

    });

}


loadCars();