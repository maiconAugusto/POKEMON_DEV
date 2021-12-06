import {PokemonActionsType, PokemonTypes, PokemonStateReducer} from './types';

const INITIAL_STATE: PokemonStateReducer = {
  data: [],
  error: '',
  isError: false,
  loading: false,
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
      };
    case PokemonTypes.POKEMON_REQUEST_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case PokemonTypes.POKEMON_REQUEST_SUCCESS_BY_ID:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PokemonTypes.POKEMON_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
