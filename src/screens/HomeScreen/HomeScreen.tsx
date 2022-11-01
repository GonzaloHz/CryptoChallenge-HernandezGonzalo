import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  HeaderTitle,
  Header,
  MiddView,
  ProfileImage,
  Footer,
  ButtonText,
} from './style';
import profileImage from '../../assets/Profile.png';
import CurrencyList from '../../containers/CurrencyList/CurrencyList';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {cryptos} = useSelector(state => state.cryptos);

  return (
    <SafeAreaView>
      <Header>
        <HeaderTitle>CryptoTracker Pro</HeaderTitle>
        <ProfileImage source={profileImage} alt="Profile Image Not Found" />
      </Header>
      <MiddView>
        <CurrencyList data={cryptos} />
      </MiddView>
      <Footer>
        <ButtonText onPress={() => navigation.navigate('AddCrypto')}>
          + Add a Cryptocurrency
        </ButtonText>
      </Footer>
    </SafeAreaView>
  );
};

export default HomeScreen;