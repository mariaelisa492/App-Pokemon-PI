import axios from 'axios';

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const dataPokemons = await axios.get("http://localhost:3001/pokemons");  //Back
            return dispatch({
                type: 'GET_POKEMONS',
                payload: dataPokemons.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export const getPokemonsTypes = () => {
    return async (dispatch) => {
        try {
            const typePokemons = await axios.get("http://localhost:3001/types");
            return dispatch({
                type: 'GET_TYPE',
                payload: typePokemons.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export const filterType = (type) => {
    return async (dispatch) =>
        dispatch({ 
            type: 'POKEMON_FILTER_TYPE', 
            payload: type })
};

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const pokemon = await axios(`http://localhost:3001/pokemons/${id}`);
            return dispatch({
                type: 'GET_POKEMON_DETAIL',
                payload: pokemon.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPokemonName = (name) => {
    return async (dispatch) => {
        try {
            const pokemonName = await axios(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({
                type: 'GET_POKEMON_NAME',
                payload: pokemonName.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const addPokemon = (newPoke) => {   //transformo pokemon creado en el objeto que la DB necesita
    return async () => {
        try {
            const objNewPoke = {
                name: newPoke.name,
                life: newPoke.life,
                attack: newPoke.attack,
                defense: newPoke.defense,
                speed: newPoke.speed,
                weight: newPoke.weight,
                height: newPoke.height,
                types: [newPoke.type1, newPoke.type2],
            }
            const createPoke = await axios.post("http://localhost:3001/pokemons", objNewPoke);
            return console.log(createPoke.data)
        } catch (error) {
            console.log(error)
        }
    }
}
