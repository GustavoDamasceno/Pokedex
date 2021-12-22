import { Listadepokemons } from "./listar_pokemons.js"
import http from 'http';

const port = 80;

let dados = '<div style="text-align:center"><h1>POKEDEX</h1></div>';

let listapoke = "";


for(let pokemon of Listadepokemons){
    listapoke += `
         
            <p><b>Id</b>: ${pokemon["ID"]} - <b>Nome</b>: ${pokemon["Nome"]} - <b>Vida Base</b>: ${pokemon["HP"]} - <b>Ataque</b>: ${pokemon["Atk"]} - 
            <b>Defesa</b>: ${pokemon["Dfs"]} - <b>Ataque especial</b>: ${pokemon["SpcATK"]} - <b>Defesa especial</b>: ${pokemon["SpcDFS"]} - 
            <b>Velocidade</b>: ${pokemon["Velocidade"]}`;
  }


const server = http.createServer((req, res) => {
        if(req.url === "/pokemons"){
            res.end(dados + listapoke);
        }else{
            res.end("Erro, sem dados");
        }
})


server.listen(port, () => {
    console.log(`Servidor iniciou em http://localhost:${port}/`)
  })