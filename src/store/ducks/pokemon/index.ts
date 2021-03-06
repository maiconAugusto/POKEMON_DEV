import {PokemonActionsType, PokemonTypes, PokemonStateReducer} from './types';

const INITIAL_STATE: PokemonStateReducer = {
  data: [],
  pokemonDetail: null,
  loading: false,
  loadingDetail: false,
};

const pokemonReducer = (state = INITIAL_STATE, action: PokemonActionsType) => {
  switch (action.type) {
    case PokemonTypes.POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PokemonTypes.POKEMON_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    case PokemonTypes.POKEMON_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        loadingDetail: false,
      };
    case PokemonTypes.POKEMON_REQUEST_BY_ID:
      return {
        ...state,
        loadingDetail: true,
      };
    case PokemonTypes.POKEMON_REQUEST_SUCCESS_BY_ID:
      return {
        ...state,
        loadingDetail: false,
        pokemonDetail: action.payload,
      };
    case PokemonTypes.CLEAN_POKEMON_DATA:
      return {
        ...state,
        data: [],
        pokemonDetail: null,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
