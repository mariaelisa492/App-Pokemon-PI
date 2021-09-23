
const initialState = {
    pokemonsTotal: [],
    pokemonDetail: {},
    pokemonsTypes: [],
	pokemonsFilter: []
	//favoritos  y filtros
};

export const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case 'GET_TYPE':
			return {
				...state,
				pokemonsTypes: action.payload
			};
		case 'GET_POKEMONS':
			return{
				...state,
				pokemonsTotal: action.payload
			};
		case 'GET_POKEMON_NAME':
			return{
				...state,
				pokemonsTotal: action.payload
			};
		case 'ADD_POKEMON':
			return{
				...state,
				pokemonsTotal: [action.payload,...state.pokemonsTotal]
			};
		case 'GET_POKEMON_DETAIL':
				return{
					...state,
					pokemonDetail: action.payload
				};
		case 'POKEMON_FILTER_TYPE':
			return {
				...state,
				pokemonsFilter: action.payload
			};
		default:
			return state;
	}
};