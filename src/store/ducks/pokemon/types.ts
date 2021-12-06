export interface Pokemon {
  name?: string;
  url?: string;
}

export enum PokemonTypes {
  POKEMON_REQUEST = '@POKEMON_REQUEST',
  POKEMON_REQUEST_BY_ID = '@POKEMON_REQUEST_BY_ID',
  POKEMON_REQUEST_SUCCESS = '@POKEMON_REQUEST_SUCCESS',
  POKEMON_REQUEST_SUCCESS_BY_ID = '@POKEMON_REQUEST_SUCCESS_BY_ID',
  POKEMON_REQUEST_FAILURE = '@POKEMON_REQUEST_FAILURE',
  SET_POKEMON_DATA = '@SET_POKEMON_DATA',
  SET_POKEMON_DATA_BY_ID = '@SET_POKEMON_DATA_BY_ID',
}

export interface PokemonStateReducer {
  readonly loading: boolean;
  readonly data: Array<any>;
  readonly error: string;
  readonly isError: boolean;
}

interface RequestPokemonData {
  type: typeof PokemonTypes.POKEMON_REQUEST;
  payload: {
    offset: number;
    limit: number;
  };
}

interface RequestPokemonDataByID {
  type: typeof PokemonTypes.POKEMON_REQUEST_BY_ID;
  payload: any;
}

interface SetPokemonDataByID {
  type: typeof PokemonTypes.SET_POKEMON_DATA_BY_ID;
  payload: any;
}

interface RequestFailure {
  type: typeof PokemonTypes.POKEMON_REQUEST_FAILURE;
  payload: string;
}

interface RequestSuccess {
  type: typeof PokemonTypes.POKEMON_REQUEST_SUCCESS;
  payload: Array<Pokemon>;
}

interface RequestSuccessById {
  type: typeof PokemonTypes.POKEMON_REQUEST_SUCCESS_BY_ID;
  payload: Pokemon;
}

export type PokemonActionsType =
  | RequestPokemonData
  | RequestSuccessById
  | RequestSuccess
  | RequestPokemonDataByID
  | SetPokemonDataByID
  | RequestFailure;
