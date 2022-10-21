import React from 'react';
import {
  ItemContainer,
  ItemLeftContainer,
  ItemRigthContainer,
  ItemSubSubContainer,
  ItemTitle,
  StyledArrow,
  StyledImage,
  TextPercentage,
} from './style';
import ArrowUp from '../../assets/ArrowGreen.png';
import ArrowDown from '../../assets/ArrowRed.png';
import {Text} from 'react-native';
import DataTypes from '../../types/types';

const CryptoItem = ({
  symbol,
  name,
  value,
  percentage,
  signal,
  slug,
  image,
}: {
  symbol: DataTypes['symbol'];
  name: DataTypes['name'];
  value: DataTypes['value'],
  percentage: DataTypes['percentage'],
  signal: DataTypes['signal'],
  slug: DataTypes['slug'],
  image: DataTypes['image'],
}) => (
  <ItemContainer>
    <StyledImage source={image} alt="image not found" />
    <ItemLeftContainer>
      <ItemTitle>{name}</ItemTitle>
      <Text>{symbol}</Text>
    </ItemLeftContainer>
    <ItemRigthContainer>
      <ItemTitle>${value}</ItemTitle>
      <ItemSubSubContainer>
        <StyledArrow
          source={signal ? ArrowUp : ArrowDown}
          alt="image not found"
        />
        <TextPercentage color={signal ? 'green' : 'red'}>
          {percentage}
        </TextPercentage>
      </ItemSubSubContainer>
    </ItemRigthContainer>
  </ItemContainer>
);

export default CryptoItem;