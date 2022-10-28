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
    <StyledImage
      source={{uri: `https://messari.io/asset-images/${item.id}/32.png`}}
      alt="img not found"
    />
    <NameContainer>
      <ItemTitle>{item.name}</ItemTitle>
      <Text>{item.symbol}</Text>
    </NameContainer>
    <PercentageContainer>
      <ItemTitle>${item.metrics.market_data.price_usd.toFixed(2)}</ItemTitle>
      <ItemSubContainer>
        <ArrowPercentage
          source={
            item.metrics.market_data.percent_change_usd_last_24_hours >= 0
              ? ArrowUp
              : ArrowDown
          }
          alt="image not found"
        />
        <TextPercentage
          signal={
            item.metrics.market_data.percent_change_usd_last_24_hours >= 0
          }>
          {item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)}
        </TextPercentage>
      </ItemSubContainer>
    </PercentageContainer>
  </ItemContainer>
);

export default CryptoItem;