import Pokemons from "./models/pokemons.js";

const Listadepokemons = [];

Pokemons['pokemons'].forEach(pokemon => {
    Listadepokemons.push({
      ID: pokemon.id,
      Nome: pokemon.name,
      HP: pokemon.stats[0].base_stat,
      Atk: pokemon.stats[1].base_stat,
      Dfs: pokemon.stats[2].base_stat,
      SpcATK: pokemon.stats[3].base_stat,
      SpcDFS: pokemon.stats[4].base_stat,
      Velocidade: pokemon.stats[5].base_stat,
    })
});

console.table(Listadepokemons, ["ID", "Nome", "HP", "Atk", "Dfs", "SpcATK", "SpcDFS", "Velocidade"]);

export { Listadepokemons };
