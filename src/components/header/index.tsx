import React from 'react';
import {Icon} from 'react-native-elements';
import colors from '../../const/colors';
import {HeaderTop} from './styles';

interface Props {
  onPress: Function;
}

const Header: React.FC<Props> = ({onPress}) => {
  return (
    <HeaderTop>
      <Icon
        raised
        name="arrow-back"
        type="material-icons"
        color={colors.primaryColor}
        onPress={() => onPress()}
      />
    </HeaderTop>
  );
};
export default Header;
