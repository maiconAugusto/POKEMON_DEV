import {
  Pokemon,
  PokemonActionsType,
  PokemonDetail,
  PokemonTypes,
} from './types';

export function REQUEST_POKEMON(payload: {
  offset: number;
  limit: number;
}): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST,
    payload,
  };
}
export function REQUEST_POKEMON_BY_ID(payload: string): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_BY_ID,
    payload,
  };
}
export function REQUEST_POKEMON_SUCCESS(
  payload: Array<Pokemon>,
): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_SUCCESS,
    payload,
  };
}
export function REQUEST_POKEMON_BY_ID_SUCCESS(
  payload: PokemonDetail,
): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_SUCCESS_BY_ID,
    payload,
  };
}
export function REQUEST_POKEMON_FAILURE(): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_FAILURE,
  };
}
export function CLEAN_POKEMON_DATA(): PokemonActionsType {
  return {
    type: PokemonTypes.CLEAN_POKEMON_DATA,
  };
}
