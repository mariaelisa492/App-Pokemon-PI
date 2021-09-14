const axios = require('axios');  //cambie la sintaxis de const axios a EMCAscript 6
const { Pokemon, Type } = require('../db');
const { URL_API_POKEMON, URL_API_POKEMON_NAME_OR_ID } = require('../utils/GlobalConst');


//me permite obtener los pokemons de la pokeapi
const getPokeapi = async () => {

    try {
        const totalPokemonsRequest = await axios.get(URL_API_POKEMON);  //me devuelve los 40 objetitos con un name y una url de cada pokemon
        const totalPokemonsSubrequest = totalPokemonsRequest.data.results.map(obj => axios.get(obj.url));      //hago el axios pero a la sub url 
        const infoUrlPokemons = await axios.all(totalPokemonsSubrequest);  //solicitudes simultaneas 

        let pokemons = infoUrlPokemons.map(obj => obj.data);  //obtengo la data de cada pokemon por su suburl
        //console.log(pokemons)
        let infoPokemons = [];
        pokemons.forEach(pokemon => {
            infoPokemons.push({
                id: pokemon.id,
                name: pokemon.name,
                life: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                sprite: pokemon.sprites.other.dream_world.front_default
            })
        })
        return infoPokemons

    } catch (error) {
        console.log(error);
    }
};

//me permite obtener los pokemons de la DB
const getPokedb = async () => {
    try {
        return await Pokemon.findAll({       //trae los pokemones, que incluyan el nombre del type (tipo join)
            include: {
                model: Type,
                attributes: ['name'],        //me trae el name del type
                through: {
                    attributes: []
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
};
//me permite unir el array que me devuelve la pokeapi (40) pokemons + los pokemons creados en la DB pokemons
const getAllPoke = async () => {
    const apiPokeData = await getPokeapi();
    const dbPokeData = await getPokedb();
    // console.log(dbPokeData)
    return [...apiPokeData, ...dbPokeData];
};

//me permite obtener un poke por el name pasado en query
const getPokeByName = async (name) => {
    const searchPokeNameDB = await getPokedb();   //ejecuta para traerme los pokemons de la DB
    const foundPokeNameDB = [];
    searchPokeNameDB.length > 0 ? foundPokeNameDB = await searchPokeNameDB.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()) : foundPokeNameDB;  //si trael algo entonces lo busco(find), sino queda vacio
    // console.log('searchPokeDB',searchPokeNameDB);
    if(foundPokeNameDB.length > 0){            //si el objeto tiene algo, entonces retornelo
        console.log('entro db');
        return foundPokeNameDB
    }else{
        console.log('entro pokeapi');
        const searchPokeapiName = await axios.get(`${URL_API_POKEMON_NAME_OR_ID}${name.toLowerCase()}`);       //obtengo el pokemon de la url/name
        const foundPokeapiName = objPokeApi(searchPokeapiName.data);
        console.log('foundPokeapi',foundPokeapiName)
        return foundPokeapiName
    }
};

//me permite obtener pokemon por id
const getPokeById = async (id) => {
    const searchPokeIdDB = await getPokedb();
    const foundPokeIdDB = [];
    searchPokeIdDB.length > 0 ? foundPokeIdDB = await searchPokeIdDB.find(pokemon => pokemon.id.toString() === id.toString()) : foundPokeIdDB; 
    if(foundPokeIdDB.length > 0){
        return foundPokeIdDB        //pokemon por id en DB
    }else{
        const searchPokeapiId = await axios.get(`${URL_API_POKEMON_NAME_OR_ID}${id.toString()}`);
        const foundPokeapiId = objPokeApi(searchPokeapiId.data);
        console.log('foundPokeapi',foundPokeapiId)
        return foundPokeapiId;     //pokemon por id en pokeapi
    }
}

//objeto que devuelve la url/id o name
const objPokeApi = (poke) => {
    const objPokeapi = [
        {
            id: poke.id,
            name: poke.name,
            life: poke.stats[0].base_stat,
            attack: poke.stats[1].base_stat,
            defense: poke.stats[2].base_stat,
            speed: poke.stats[5].base_stat,
            height: poke.height,
            weight: poke.weight,
            sprite: poke.sprites.other.dream_world.front_default
        }
    ];
    return objPokeapi
}


module.exports = {
    getPokeapi,
    getPokedb,
    getAllPoke,
    getPokeByName,
    getPokeById
}