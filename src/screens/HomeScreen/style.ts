import styled from 'styled-components';
import theme from "../../utils/theme"

export const Header = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${theme.colors.blue};
  display: flex;
  flex-direction: row;
`;

export const MiddView = styled.View`
  width: 100%;
  min-height: 200px;
  background-color: ${theme.colors.white};
`;

export const Footer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  padding-top: 30px;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  color: ${theme.colors.white};
  padding-top: 10%; 
  padding-left: 5%;
  font-size: 22px;
`;

export const ProfileImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  margin-top: 30px; 
  margin-left: 120px;
  background-color: ${theme.colors.white};
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.blue};
  display: flex;
  text-align: center;
  font-size: 17.5px;
`;