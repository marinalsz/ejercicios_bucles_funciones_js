//Ejercicio 12

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(list, power) {
  const foundMutants = [];
  for (const mutant of list) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }
  if (foundMutants.length) {
    console.log(foundMutants);
  } else {
    console.log("No existen mutantes con ese poder");
  }
}

findMutantByPower(mutants, "teleportation");
findMutantByPower(mutants, "dancing");
