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
import {useAppDispatch} from '../../store/store/store';
import {useSelector} from 'react-redux';
import {deleteCrypto} from '../../store/actions/actions';

const CryptoItem = ({item}: {item: CryptoTypes}) => {
  const {cryptos} = useSelector(state => state.cryptos);
  const dispatch = useAppDispatch();
  const handleOnDelete = () => {
    dispatch(deleteCrypto(item.Asset.id, cryptos));
  };

  return (
    <ItemContainer onPress={handleOnDelete}>
      <StyledImage
        source={{
          uri: `https://messari.io/asset-images/${item.Asset.id}/32.png`,
        }}
        alt="img not found"
      />
      <NameContainer>
        <ItemTitle>{item.Asset.name}</ItemTitle>
        <Text>{item.Asset.symbol}</Text>
      </NameContainer>
      <PercentageContainer>
        <ItemTitle>${item.market_data.price_usd.toFixed(2)}</ItemTitle>
        <ItemSubContainer>
          <ArrowPercentage
            source={
              item.market_data.percent_change_usd_last_24_hours >= 0
                ? ArrowUp
                : ArrowDown
            }
            alt="image not found"
          />
          <TextPercentage
            signal={item.market_data.percent_change_usd_last_24_hours >= 0}>
            {item.market_data.percent_change_usd_last_24_hours.toFixed(2)}
          </TextPercentage>
        </ItemSubContainer>
      </PercentageContainer>
    </ItemContainer>
  );
};

export default CryptoItem;