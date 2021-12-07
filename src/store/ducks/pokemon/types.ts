export interface Pokemon {
  name?: string;
  url?: string;
}

export interface PokemonDetail {
  name: string;
  weight: string;
  height: string;
  url: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
}

export enum PokemonTypes {
  POKEMON_REQUEST = '@POKEMON_REQUEST',
  POKEMON_REQUEST_BY_ID = '@POKEMON_REQUEST_BY_ID',
  POKEMON_REQUEST_SUCCESS = '@POKEMON_REQUEST_SUCCESS',
  POKEMON_REQUEST_SUCCESS_BY_ID = '@POKEMON_REQUEST_SUCCESS_BY_ID',
  POKEMON_REQUEST_FAILURE = '@POKEMON_REQUEST_FAILURE',
  SET_POKEMON_DATA = '@SET_POKEMON_DATA',
  SET_POKEMON_DATA_BY_ID = '@SET_POKEMON_DATA_BY_ID',
  CLEAN_POKEMON_DATA = '@CLEAN_POKEMON_DATA',
}

export interface PokemonStateReducer {
  readonly loading: boolean;
  readonly loadingDetail: boolean;
  readonly data: Array<any>;
  readonly pokemonDetail: PokemonDetail | null;
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
}

interface RequestSuccess {
  type: typeof PokemonTypes.POKEMON_REQUEST_SUCCESS;
  payload: Array<Pokemon>;
}

interface RequestSuccessById {
  type: typeof PokemonTypes.POKEMON_REQUEST_SUCCESS_BY_ID;
  payload: Pokemon;
}

interface CleanPokemonData {
  type: typeof PokemonTypes.CLEAN_POKEMON_DATA;
}

export type PokemonActionsType =
  | RequestPokemonData
  | RequestSuccessById
  | RequestSuccess
  | RequestPokemonDataByID
  | SetPokemonDataByID
  | RequestFailure
  | CleanPokemonData;
