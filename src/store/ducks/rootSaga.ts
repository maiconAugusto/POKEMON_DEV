import {all, takeLatest} from 'redux-saga/effects';
import {REQUEST_POKEMONS} from './pokemon/sagas';
import {PokemonTypes} from './pokemon/types';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(PokemonTypes.POKEMON_REQUEST, REQUEST_POKEMONS),
  ]);
}
