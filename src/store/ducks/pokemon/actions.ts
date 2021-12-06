import {PokemonActionsType, PokemonTypes} from './types';

export function REQUEST_POKEMON(payload: {
  offset: number;
  limit: number;
}): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST,
    payload,
  };
}
export function REQUEST_POKEMON_BY_ID(payload: any): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_BY_ID,
    payload,
  };
}
export function REQUEST_POKEMON_SUCCESS(
  payload: Array<any>,
): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_SUCCESS,
    payload,
  };
}
export function REQUEST_POKEMON_BY_ID_SUCCESS(
  payload: any,
): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_SUCCESS_BY_ID,
    payload,
  };
}
export function REQUEST_POKEMON_FAILURE(payload: string): PokemonActionsType {
  return {
    type: PokemonTypes.POKEMON_REQUEST_FAILURE,
    payload,
  };
}
