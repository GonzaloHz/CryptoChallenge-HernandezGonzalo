import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
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
import {updateCrypto} from '../../store/actions/actions';
import {useAppDispatch} from '../../store/store/store';

const HomeScreen = ({navigation}) => {
  const {cryptos} = useSelector(state => state.cryptos);
  const dispatch = useAppDispatch();
  const handleUpdated = () => {
    dispatch(updateCrypto(cryptos))
  }
  useEffect(() => {
    const time = setInterval(() => handleUpdated(), 5000);
    return () => clearInterval(time);
  });

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