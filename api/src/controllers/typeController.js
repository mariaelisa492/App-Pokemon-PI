const axios = require('axios');  //cambie la sintaxis de const axios a EMCAscript 6
const { Pokemon, Type } = require('../db');
const { URL_API_POKEMON_TYPE } = require('../utils/GlobalConst');


const getPokeapiTotal = () => {

}

const getTypes = (array) => {
    let types = array.map( type => type.name);
    return types;
}


module.exports = {
    getPokeapiTotal,
    getTypes
}