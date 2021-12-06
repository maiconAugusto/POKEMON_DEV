import styled from 'styled-components/native';
import colors from '../../const/colors';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${colors.backgroundColor};
`;
export const Header = styled.View`
  height: 80px;
  display: flex;
  align-items: center;
  margin: 10px 20px 0px 20px;
`;
export const Image = styled.Image`
  height: 70px;
  width: 200px;
`;
