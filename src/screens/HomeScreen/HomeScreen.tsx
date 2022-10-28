import React, {useEffect, useState} from 'react';
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
import CryptoTypes from '../../types/types';
import {API_URL} from '@env';

const HomeScreen = () =>{
  const [coins, setCoins] = useState<CryptoTypes[]>([]) 
  const getAllCryptos = async () => {
    try {
      const dataAPI = await fetch(API_URL);
      const data = await dataAPI.json()
      setCoins(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCryptos()
  }, []);

  return (
    <SafeAreaView>
      <Header>
        <HeaderTitle>CryptoTracker Pro</HeaderTitle>
        <ProfileImage source={profileImage} alt="Profile Image Not Found" />
      </Header>
      <MiddView>
        <CurrencyList data={coins} />
      </MiddView>
      <Footer>
        <ButtonText>+ Add a Cryptocurrency</ButtonText>
      </Footer>
    </SafeAreaView>
  );
};

export default HomeScreen;