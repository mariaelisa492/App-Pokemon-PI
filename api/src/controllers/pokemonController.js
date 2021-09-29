const axios = require('axios');  //cambie la sintaxis de const axios a EMCAscript 6, pero no funciono :(
const { Pokemon, Type } = require('../db');
const { URL_API_POKEMON, URL_API_POKEMON_NAME_OR_ID } = require('../utils/GlobalConst');


//me permite obtener los pokemons de la pokeapi
const getPokeapi = async () => {
    try {
        const totalPokemonsRequest = await axios.get(URL_API_POKEMON);  //me devuelve los 40 objetitos con un name y una url de cada pokemon
        const totalPokemonsSubrequest = totalPokemonsRequest.data.results.map(obj => axios.get(obj.url));      //hago el axios pero a la sub url 
        const infoUrlPokemons = await axios.all(totalPokemonsSubrequest);  //solicitudes simultaneas 

        let pokemons = infoUrlPokemons.map(obj => obj.data);  //obtengo la data de cada pokemon por su suburl
        let infoPokemons = pokemons.map(pokemon => objPokeApi(pokemon))
        return infoPokemons

    } catch (error) {
        console.log(error);
        return error;
    }
};

//me permite obtener los pokemons de la DB
const getPokedb = async () => {
    try {
        return await Pokemon.findAll({       //trae los pokemones, que incluyan el nombre del type (tipo join)
            include: {
                model: Type,
                attributes: ['name'],        //me trae el name del type
            }
        })
    } catch (error) {
        console.log(error);
        return error;
    }
};

//me permite unir el array que me devuelve la pokeapi (40) pokemons + los pokemons creados en la DB pokemons
const getAllPoke = async () => {
    try {
        const apiPokeData = await getPokeapi();
        const dbPokeData = await getPokedb();
        // console.log(dbPokeData)
        return [...apiPokeData, ...dbPokeData];

    } catch (error) {
        console.log(error);
        return error;
    }
};

//me permite obtener un poke por el name pasado en query
const getPokeByName = async (name) => {
    try {
        const searchPokeNameDB = await Pokemon.findOne({
            where: { name },            //encuentra primera coincidencia
            include: { model: Type }
        })
        if (searchPokeNameDB) {
            let pokedbName = {
                id: searchPokeNameDB.id,
                name: searchPokeNameDB.name,
                life: searchPokeNameDB.life,
                attack: searchPokeNameDB.attack,
                defense: searchPokeNameDB.defense,
                speed: searchPokeNameDB.speed,
                height: searchPokeNameDB.height,
                weight: searchPokeNameDB.weight,
                sprite: searchPokeNameDB.sprite,
                types: searchPokeNameDB.types.length < 2 ? [searchPokeNameDB.types[0]] : [searchPokeNameDB.types[0], searchPokeNameDB.types[1]]
            }
            return pokedbName;
        }else {
            const searchPokeapiName = await axios.get(`${URL_API_POKEMON_NAME_OR_ID}${name.toLowerCase()}`);       //obtengo el pokemon de la url/name
            const foundPokeapiName = objPokeApi(searchPokeapiName.data);
            // console.log('foundPokeapi', foundPokeapiName)
            return foundPokeapiName
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

//me permite obtener pokemon por id
const getPokeById = async (id) => {
    try {
        if (id.length > 2) {
            const searchPokeIdDB = await Pokemon.findOne({where: {id}, include: Type});
            console.log('POKEMON BASE DE DATOS', searchPokeIdDB)
            let pokedbId = {
                id: searchPokeIdDB.id,
                name: searchPokeIdDB.name,
                life: searchPokeIdDB.life,
                attack: searchPokeIdDB.attack,
                defense: searchPokeIdDB.defense,
                speed: searchPokeIdDB.speed,
                height: searchPokeIdDB.height,
                weight: searchPokeIdDB.weight,
                sprite: searchPokeIdDB.sprite,
                types: searchPokeIdDB.types.length < 2 ? [searchPokeIdDB.types[0]] : [searchPokeIdDB.types[0] , searchPokeIdDB.types[1]]
            }
            return pokedbId;
        } else {
            const searchPokeapiId = await axios.get(`${URL_API_POKEMON_NAME_OR_ID}${id.toString()}`);
            const foundPokeapiId = objPokeApi(searchPokeapiId.data);
            // console.log('foundPokeapi', foundPokeapiId)
            return foundPokeapiId;     //pokemon por id en pokeapi
        }
    } catch (error) {
        console.log(error);
        return error;
    }

}

//objeto que devuelve la url/poke o /id o /name
const objPokeApi = (poke) => {
    const objPokeapi =
    {
        id: poke.id,
        name: poke.name,
        life: poke.stats[0].base_stat,
        attack: poke.stats[1].base_stat,
        defense: poke.stats[2].base_stat,
        speed: poke.stats[5].base_stat,
        height: poke.height,
        weight: poke.weight,
        sprite: poke.sprites.other.dream_world.front_default,
        types: poke.types.length < 2 ? [{ name: poke.types[0].type.name}] : [{ name: poke.types[0].type.name}, { name: poke.types[1].type.name}]
    };
    return objPokeapi
};


//permite hacer post de pokemon

const postPokedb = async (pokeData) => {
    try {
        const { name, life, attack, defense, speed, height, weight, sprite, types } = pokeData;
        const myPoke = await Pokemon.create(
            {
                name,
                life,
                attack,
                defense,
                speed,
                height,
                weight,
                sprite,
            }
        );
        const pokeTypedb = await Type.findAll({
            where: { name: types }         //donde el name coincida con los types que me pasan
        });

        let createdMyPoke = myPoke.addType(pokeTypedb);
        return createdMyPoke;
    } catch (error) {
        console.log(error);
        return error;
    }
};


module.exports = {
    getPokeapi,
    getPokedb,
    getAllPoke,
    getPokeByName,
    getPokeById,
    postPokedb,
}