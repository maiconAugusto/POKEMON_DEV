import {combineReducers} from 'redux';
import pokemonReducer from '../ducks//pokemon/index';

export default combineReducers({
  pokemon: pokemonReducer,
});
