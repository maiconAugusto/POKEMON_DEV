import {call} from 'redux-saga/effects';
import store from '../../../store/index';
import {AxiosResponse} from 'axios';
import {axiosDefault} from '../.././../services';
import {REQUEST_POKEMON_SUCCESS, REQUEST_POKEMON_FAILURE} from './actions';

export function* REQUEST_POKEMONS({payload}) {
  try {
    console.log(payload)
    const {offset, limit} = payload;
    console.log(offset, limit);
    const response: AxiosResponse = yield call(
      axiosDefault.get,
      `pokemon?offset=${offset}&limit=${limit}`,
    );
    const {results} = response?.data;

    store.dispatch(REQUEST_POKEMON_SUCCESS(results));
  } catch (err: any) {
    console.log(err);
  }
}
