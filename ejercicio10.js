//Ejercicio 10

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country]) {
    console.log("La capital de " + country + " es " + capitals[country]);
  } else {
    console.log("No se encuentra ese país en el array.");
  }
}

getCapital("Italy");
getCapital("Poland");
getCapital("Barbieland");
