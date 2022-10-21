import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyledText,
  StyledHeader,
  StyledView,
  StyledImage,
  StyledFoot,
  ButtonText,
} from './style';
import profileImage from '../../assets/Profile.png';
import bitcoinLogo from "../../assets/bitcoinLogo.png"
import ethereumLogo from "../../assets/ethereumLogo2.jpg"
import xprLogo from "../../assets/xprLogo.png"
import CurrencyList from '../../containers/CurrencyList/CurrencyList';

const data = [
  {
    name: 'Bitcoin',
    slug: 'bitcoin',
    symbol: 'BTC',
    value: '7,215.68',
    percentage: '1,82',
    signal: true,
    image: bitcoinLogo,
  },
  {
    name: 'Ethereum',
    slug: 'ethereum',
    symbol: 'ETH',
    value: '146.83',
    percentage: '1,46',
    signal: true,
    image: ethereumLogo,
  },
  {
    name: 'XRP',
    slug: 'XRP',
    symbol: 'XRP',
    value: '0.220568',
    percentage: '2,47',
    signal: false,
    image: xprLogo,
  }
]

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StyledHeader>
        <StyledText>CryptoTracker Pro</StyledText>
        <StyledImage source={profileImage} alt="Profile Image Not Found" />
      </StyledHeader>
      <StyledView>
        <CurrencyList data={data} />
      </StyledView>
      <StyledFoot>
        <ButtonText>+ Add a Cryptocurrency</ButtonText>
      </StyledFoot>
    </SafeAreaView>
  );
};

export default HomeScreen;