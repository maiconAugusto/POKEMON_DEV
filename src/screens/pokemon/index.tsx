import React, {useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {Container, Header, Image, TextInfo} from './styles';
import {
  CLEAN_POKEMON_DATA,
  REQUEST_POKEMON,
  REQUEST_POKEMON_BY_ID,
} from '../../store/ducks/pokemon/actions';
import {PokemonStateReducer} from '../../store/ducks/pokemon/types';
import {FlatList, RefreshControl} from 'react-native';
import colors from '../../const/colors';
import {GenerateImage} from '../../utils/generateImage';
import PokemonProfile from '../../components/pokemonProfile';
import {useNavigation} from '@react-navigation/core';
import {RootRouter} from '../../const/routes';
import {GetIdPokemon} from '../../utils/getIdPokemen';

const PokemonView = () => {
  const navigation = useNavigation();
  const [offset, setOffset] = useState<number>(10);
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

    return (
      <PokemonProfile
        url={GenerateImage(urls)}
        key={GetIdPokemon(urls)}
        name={name}
        onPress={() => {
          dispatch(REQUEST_POKEMON_BY_ID(GetIdPokemon(urls)));
          navigation.navigate(RootRouter.pokemonDetails, {
            photo: GenerateImage(urls),
          });
        }}
      />
    );
  };

  const loadPage = () => {
    const value = offset + 10;
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
            onRefresh={() => {
              dispatch(CLEAN_POKEMON_DATA());
              dispatch(REQUEST_POKEMON({offset: 10, limit: 20}));
            }}
            colors={[colors.primaryColor, colors.secondaryColor]}
            refreshing={loading}
          />
        }
        keyExtractor={(item, index) => index.toString()}
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
        ListEmptyComponent={
          !loading ? (
            <>{data.length === 0 && <TextInfo>Sem itens na lista</TextInfo>}</>
          ) : null
        }
      />
    </Container>
  );
};
export default PokemonView;
