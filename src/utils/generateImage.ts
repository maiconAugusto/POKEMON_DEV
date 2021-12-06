import {Urls} from './urls';

export const GenerateImage = (url: string) => {
  const idPokemon = url?.split('https://pokeapi.co/api/v2/pokemon/');
  const link =
    Urls.urlImage +
    idPokemon[1]?.substring(0, idPokemon[1]?.length - 1) +
    '.png';
  return link;
};
