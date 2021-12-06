import {call} from 'redux-saga/effects';
import store from '../../../store/index';
import {AxiosResponse} from 'axios';
import {axiosDefault} from '../.././../services';
import {
  REQUEST_POKEMON_SUCCESS,
  REQUEST_POKEMON_FAILURE,
  REQUEST_POKEMON_BY_ID_SUCCESS,
} from './actions';
import {PokemonDetail} from './types';

export function* REQUEST_POKEMONS({payload}) {
  try {
    const {offset, limit} = payload;

    const response: AxiosResponse = yield call(
      axiosDefault.get,
      `pokemon?offset=${offset}&limit=${limit}`,
    );
    const {results} = response?.data;

    store.dispatch(REQUEST_POKEMON_SUCCESS(results));
  } catch (err: any) {
    store.dispatch(REQUEST_POKEMON_FAILURE());
  }
}

export function* REQUEST_POKEMONS_BY_ID({payload}) {
  try {
    const response: AxiosResponse = yield call(
      axiosDefault.get,
      `pokemon/${payload}/`,
    );
    const {forms, height, weight} = response.data;

    const pokemonDetail: PokemonDetail = {
      name: forms[0]?.name,
      height,
      weight,
      url: forms[0]?.url,
    };

    store.dispatch(REQUEST_POKEMON_BY_ID_SUCCESS(pokemonDetail));
  } catch (err: any) {
    store.dispatch(REQUEST_POKEMON_FAILURE());
  }
}
