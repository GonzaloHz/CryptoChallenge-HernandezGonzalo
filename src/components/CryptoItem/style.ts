import styled from "styled-components"

export const StyledImage = styled.Image`
  max-height: 60px;
  max-width: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const StyledArrow = styled.Image`
  max-height: 20px;
  max-width: 20px;
`;

export const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  border-color: gray;
  border-bottom-width: 0.3px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemRigthContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 20px;
`;

export const ItemLeftContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ItemSubSubContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const ItemTitle = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 17px;
  padding-top: 5px;
`;

export const TextPercentage = styled.Text`
  color: ${props => props.color};
  display: flex;
  text-align: right;
  margin-left: auto;
`;