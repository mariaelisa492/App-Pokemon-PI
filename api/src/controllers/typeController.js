const axios = require('axios');  //cambie la sintaxis de const axios a EMCAscript 6
const { Type } = require('../db');
const { URL_API_POKEMON_TYPE } = require('../utils/GlobalConst');


const getTypesTotal = async () => {
    try {
        const foundTypesDB = await Type.findAll({
            attributes: ['name']
        });
        console.log(foundTypesDB)
        if(foundTypesDB.length === 0){
            const typesPokeapi = await axios.get(URL_API_POKEMON_TYPE);
            let typesCreatedDB = typesPokeapi.data.results.map(type => Type.create({name: type.name}));
            typesCreatedDB = await axios.all(typesCreatedDB);
            console.log("Creados en DB");
            const getTypesPokeapi = getTypes(typesCreatedDB);
            return getTypesPokeapi;
        }else{
            console.log("types DB");
            const getTypesPokeDB = getTypes(foundTypesDB);
            return getTypesPokeDB;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getTypes = (array) => {
    let types = array.map( type => type.name);
    return types;
}


module.exports = {
    getTypesTotal,
}