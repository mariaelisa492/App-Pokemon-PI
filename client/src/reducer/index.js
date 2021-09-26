
const initialState = {
	pokemonsTotal: [],
	pokemonDetail: {},
	pokemonsTypes: [],
	pokemonsFilter: [],
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TYPE':
			return {
				...state,
				pokemonsTypes: action.payload
			};
		case 'GET_POKEMONS':
			state.pokemonsFilter = [];
			return {
				...state,
				pokemonsTotal: action.payload
			};
		case 'GET_POKEMON_NAME':
			return {
				...state,
				pokemonsFilter: action.payload
			};
		case 'GET_POKEMON_DETAIL':
			return {
				...state,
				pokemonDetail: action.payload
			};
		case 'POKEMON_FILTER_TYPE':
			return {
				...state,
				pokemonsFilter: state.pokemonsTotal.filter(poke => poke.types.map(type => type.name)[0] === action.payload || poke.types.map(type => type.name)[1] === action.payload)
			};
		default:
			return state;
	}
};