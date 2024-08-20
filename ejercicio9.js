//Ejercicio 9

const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

const team = [
  { name: "Jackson", year: 1950 },
  { name: "Saka", year: 1999 },
  { name: "Gabriela", year: 1964 },
  { name: "Nacho", year: 1978 },
  { name: "Cloe", year: 1999 },
  { name: "Tyler", year: 1983 },
  { name: "Josh", year: 1933 },
  { name: "Michelle", year: 1985 },
];

function findOldestXMen(members) {
  let oldestMember = members[0];
  for (const member of members) {
    if (oldestMember.year > member.year) {
      oldestMember = member;
    }
  }
  return oldestMember;
}

const oldestXMen = findOldestXMen(xMen);
console.log("El miembro más antiguo es: " + oldestXMen.name);

const oldestPlayer = findOldestXMen(team);
console.log("El miembro más antiguo es: " + oldestPlayer.name);
