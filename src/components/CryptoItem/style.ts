import styled from "styled-components"
import theme from "../../utils/theme"

export const StyledImage = styled.Image`
  max-height: 60px;
  max-width: 60px;
  margin-right: 20px;
`;

export const ArrowPercentage = styled.Image`
  max-height: 20px;
  max-width: 20px;
`;

export const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  border-color: ${theme.colors.gray};
  border-bottom-width: 0.2px;
  margin: 10px 40px;
  width: auto;
`;

export const PercentageContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const NameContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ItemSubContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const ItemTitle = styled.Text`
  font-weight: bold;
  color: ${theme.colors.black};
  font-size: 17px;
  padding-top: 5px;
`;

export const TextPercentage = styled.Text`
  color: ${props => (props.signal ? theme.colors.green : theme.colors.red)};
  display: flex;
  text-align: right;
  margin-left: auto;
`;