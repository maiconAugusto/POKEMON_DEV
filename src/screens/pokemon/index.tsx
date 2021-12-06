import React, {useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {Container, Header, Image} from './styles';
import {REQUEST_POKEMON} from '../../store/ducks/pokemon/actions';
import {PokemonStateReducer} from '../../store/ducks/pokemon/types';
import {FlatList, RefreshControl} from 'react-native';
import colors from '../../const/colors';
import {Urls} from '../../utils/urls';
import PokemonProfile from '../../components/pokemonProfile';
import {useNavigation} from '@react-navigation/core';
import { RootRouter } from '../../const/routes';

const PokemonView = () => {
  const navigation = useNavigation();
  const [offset, setOffset] = useState<number>(20);
  const [limit] = useState<number>(20);
  const dispatch = useDispatch();
  const {data, loading} = useSelector<RootStateOrAny, PokemonStateReducer>(
    state => state.pokemon,
  );

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    try {
      dispatch(REQUEST_POKEMON({offset: offset, limit: limit}));
    } catch (error) {}
  };

  const handlePokemon = ({item}) => {
    const {url: urls, name} = item;

    let url = urls;
    const idPokemon = url.split('https://pokeapi.co/api/v2/pokemon/');
    const link =
      Urls.urlImage +
      idPokemon[1].substring(0, idPokemon[1].length - 1) +
      '.png';

    return (
      <PokemonProfile
        url={link}
        name={name}
        onPress={() => navigation.navigate(RootRouter.pokemonDetails)}
      />
    );
  };

  const loadPage = () => {
    const value = offset + 20;
    dispatch(REQUEST_POKEMON({offset: value, limit: limit}));
    setOffset(value);
  };

  return (
    <Container>
      <FlatList
        data={data}
        extraData={data}
        refreshControl={
          <RefreshControl
            onRefresh={() => dispatch(REQUEST_POKEMON({offset: 20, limit: 20}))}
            colors={[colors.primaryColor, colors.secondaryColor]}
            refreshing={loading}
          />
        }
        renderItem={handlePokemon}
        onEndReachedThreshold={0.2}
        onEndReached={() => !loading && loadPage()}
        ListHeaderComponent={
          <Header>
            <Image
              resizeMode="cover"
              source={require('../../../assets/image/pokemon.png')}
            />
          </Header>
        }
      />
    </Container>
  );
};
export default PokemonView;
