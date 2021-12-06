export const GetIdPokemon = (url: string) => {
  const idPokemon = url.split('https://pokeapi.co/api/v2/pokemon/');
  return idPokemon[1].substring(0, idPokemon[1].length - 1);
};
