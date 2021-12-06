import {all, takeLatest} from 'redux-saga/effects';
import {REQUEST_POKEMONS, REQUEST_POKEMONS_BY_ID} from './pokemon/sagas';
import {PokemonTypes} from './pokemon/types';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(PokemonTypes.POKEMON_REQUEST, REQUEST_POKEMONS),
    takeLatest(PokemonTypes.POKEMON_REQUEST_BY_ID, REQUEST_POKEMONS_BY_ID),
  ]);
}
