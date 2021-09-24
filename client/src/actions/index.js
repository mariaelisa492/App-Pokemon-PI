import axios from 'axios';

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const dataPokemons = await axios.get("http://localhost:3001/pokemons");
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
        dispatch({ type: 'POKEMON_FILTER_TYPE', payload: type })
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