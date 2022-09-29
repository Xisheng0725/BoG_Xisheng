import fetch from "node-fetch";

fetch("https://pokeapi.co/api/v2/pokemon/3").then((resp) => resp.json()).then((data) => console.log(data));