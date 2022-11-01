import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.View`
  background-color: ${theme.colors.white};
  padding: 40px 20px 0px;
  min-height: 100%;
`;

export const BackToList = styled.Text`
  color: ${theme.colors.blue};
  background-color: ${theme.colors.white};
  font-size: 18px;
`;