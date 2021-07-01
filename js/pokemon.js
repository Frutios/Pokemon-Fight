export class Pokemon {
  constructor(
    name,
    num,
    height,
    weight,
    type,
    health,
    lowAttack,
    strongAttack,
    pvMax
  ) {
    this.name = name;
    this.num = num;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.health = health;
    this.lowAttack = lowAttack;
    this.strongAttack = strongAttack;
    this.pvMax = pvMax;
  }

  attack(pokemon) {
    let critic = Math.random();
    let multiplicator = 1
    if (critic < 0.1) {
        multiplicator = 2
        console.log("CRITIC");
    }
      if (pokemon.health / pokemon.pvMax < 0.2) {
        pokemon.health = pokemon.health - (this.strongAttack.strenght * multiplicator);
        console.log(
          this.name +
            " a attaqué. Il a fait " +
            (this.strongAttack.strenght * multiplicator) +
            " dégâts."
        );
      } else {
        pokemon.health = pokemon.health - (this.lowAttack.strenght * multiplicator);
        console.log(
          this.name +
            " a attaqué. Il a fait " +
            (this.lowAttack.strenght * multiplicator) +
            " dégâts."
        );
      }
  }

  static whoStart() {
    let starter = Math.random();
    return starter;
  }
}
