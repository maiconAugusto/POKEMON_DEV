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
  margin-bottom: 8px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.primaryColor};
`;
export const Image = styled.Image`
  min-height: 100px;
  min-width: 100px;
  margin-top: 20px;
`;
export const Footer = styled.View`
  display: flex;
  height: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
