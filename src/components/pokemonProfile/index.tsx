import React from 'react';
import {Card, Text, Image} from './styles';

interface Props {
  name?: string;
  url?: string;
  onPress?: Function;
}

const PokemonProfile: React.FC<Props> = ({name, url, onPress}) => {
  return (
    <Card onPress={onPress}>
      <Image resizeMode="contain" source={{uri: url}} />
      <Text>{name}</Text>
    </Card>
  );
};

export default PokemonProfile;
