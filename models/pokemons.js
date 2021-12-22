import * as fs from 'fs';

const Pokemons = JSON.parse(
    fs.readFileSync("pokedex.json", "utf8")
);


export default Pokemons;