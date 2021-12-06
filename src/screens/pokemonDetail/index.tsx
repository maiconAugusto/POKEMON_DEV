import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Header from '../../components/header';
import {Container, ContainerImage, Scrow} from './styles';
import {RootStateOrAny, useSelector} from 'react-redux';
import {PokemonStateReducer} from '../../store/ducks/pokemon/types';
import PokemonProfile from '../../components/pokemonProfile';
import {ActivityIndicator, Image} from 'react-native';

const PokemonDetail = ({route}) => {
  const photo = route?.params?.photo;
  const navigation = useNavigation();
  const {loadingDetail, pokemonDetail} = useSelector<
    RootStateOrAny,
    PokemonStateReducer
  >(state => state.pokemon);

  return (
    <Container>
      <Scrow>
        <Header onPress={() => navigation.goBack()} />
        {loadingDetail ? (
          <ActivityIndicator size={40} />
        ) : (
          <>
            <ContainerImage>
              <Image
                style={{height: 70, width: 200}}
                resizeMode="cover"
                source={require('../../../assets/image/pokemon.png')}
              />
            </ContainerImage>
            <PokemonProfile
              isDetail
              height={pokemonDetail?.height}
              width={pokemonDetail?.weight}
              name={pokemonDetail?.name}
              url={photo}
            />
          </>
        )}
      </Scrow>
    </Container>
  );
};
export default PokemonDetail;
