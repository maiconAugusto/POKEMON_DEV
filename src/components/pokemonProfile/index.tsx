import React from 'react';
import {Card, Text, Image, Footer} from './styles';

interface Props {
  name?: string;
  url?: string;
  isDetail?: boolean;
  height?: string;
  width?: string;
  onPress?: Function;
}

const PokemonProfile: React.FC<Props> = ({
  name,
  url,
  onPress,
  isDetail,
  height,
  width,
}) => {
  return (
    <Card onPress={onPress}>
      <Image resizeMode="contain" source={{uri: url}} />
      <Text>{name}</Text>
      {isDetail && (
        <Footer>
          <Text>Altura: {((Number(height) * 10) / 100)?.toFixed(2)} Cm</Text>
          <Text>Peso: {Number(width) * 0.1} Kg</Text>
        </Footer>
      )}
    </Card>
  );
};

export default PokemonProfile;
