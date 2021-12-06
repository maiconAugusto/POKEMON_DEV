import styled from 'styled-components/native';
import colors from '../../const/colors';

export const Card = styled.Pressable`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 20px 10px 20px;
  background-color: ${colors.card};
  border-radius: 10px;
  box-shadow: 5px 5px 8px #2e2e2e;
  padding: 10px;
`;
export const Text = styled.Text`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.primaryColor};
`;
export const Image = styled.Image`
  height: 100px;
  width: 100px;
`;
export const Footer = styled.View`
  display: flex;
  height: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
