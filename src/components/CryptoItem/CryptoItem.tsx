import React from 'react';
import {
  ItemContainer,
  NameContainer,
  PercentageContainer,
  ItemSubContainer,
  ItemTitle,
  ArrowPercentage,
  StyledImage,
  TextPercentage,
} from './style';
import ArrowUp from '../../assets/ArrowGreen.png';
import ArrowDown from '../../assets/ArrowRed.png';
import {Text} from 'react-native';
import CryptoTypes from '../../types/types';

const CryptoItem = ({item}: {item: CryptoTypes}) => (
  <ItemContainer>
    <StyledImage source={item.image} alt="image not found" />
    <NameContainer>
      <ItemTitle>{item.name}</ItemTitle>
      <Text>{item.symbol}</Text>
    </NameContainer>
    <PercentageContainer>
      <ItemTitle>${item.value}</ItemTitle>
      <ItemSubContainer>
        <ArrowPercentage
          source={item.signal ? ArrowUp : ArrowDown}
          alt="image not found"
        />
        <TextPercentage signal={item.signal}>{item.percentage}</TextPercentage>
      </ItemSubContainer>
    </PercentageContainer>
  </ItemContainer>
);

export default CryptoItem;