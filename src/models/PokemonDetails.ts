export class PokemonDetaild {
  name: string = "";
  abilities: Array<{ ability: { name: string } }> = [];
  types: Array<{ type: { name: string } }> = [];
  sprites: { other: { dream_world: { front_default: string } } } = {
    other: { dream_world: { front_default: "" } },
  };
}
