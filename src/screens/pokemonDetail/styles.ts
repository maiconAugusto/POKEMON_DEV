import styled from 'styled-components/native';
import colors from '../../const/colors';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.backgroundColor};
`;
export const Scrow = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.backgroundColor};
`;
export const ContainerImage = styled.View`
  height: 80px;
  display: flex;
  align-items: center;
  margin: 0px 20px 20px 20px;
`;
export const TextInfo = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.white};
  text-align: center;
  margin-top: 10px;
`;
export const Text = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.primaryColor};
  font-weight: bold;
  margin: 10px 4px 10px 4px;
`;
export const Card = styled.Pressable`
  display: flex;
  flex-direction: row;
  margin: 10px 20px 10px 20px;
  background-color: ${colors.card};
  border-radius: 10px;
  box-shadow: 5px 5px 8px #242424;
  padding: 10px;
`;
