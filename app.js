import { Pokemon } from "./js/pokemon.js";
import { Attack } from "./js/attack.js";

let pikachu = new Pokemon(
  "Pikachu",
  25,
  40,
  6,
  "électrique",
  82,
  new Attack("foudre", 12),
  new Attack("fatal-foudre", 25),
  82
);

let evoli = new Pokemon(
  "Evoli",
  133,
  30,
  6.5,
  "normal",
  70,
  new Attack("charge", 12),
  new Attack("bélier", 24),
  70
);

if (Pokemon.whoStart() >= 0.5) {
  console.log("Pikachu commence !");
  while (pikachu.health > 0 && evoli.health > 0) {
    pikachu.attack(evoli);
    if (evoli.health > 0) {
      evoli.attack(pikachu);
    }
  }
} else {
  console.log("Evoli commence !");
  while (pikachu.health > 0 && evoli.health > 0) {
    evoli.attack(pikachu);
    if (pikachu.health > 0) {
      pikachu.attack(evoli);
    }
  }
}

if (pikachu.health <= 0) {
  console.log("Evoli a gagné le combat. il lui restait " + evoli.health + "pv");
} else {
  console.log(
    "Pikachu a gagné le combat. il lui restait " + pikachu.health + "pv"
  );
}
