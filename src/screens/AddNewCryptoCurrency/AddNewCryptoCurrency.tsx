import {SafeAreaView} from 'react-native';
import {BackToList, Container} from './style';
import React from 'react';
import CryptoForm from '../../components/CryptoForm/CryptoForm';

const AddNewCryptoCurrency = ({navigation}) => (
  <SafeAreaView>
    <Container>
      <BackToList onPress={() => navigation.navigate('Home')}>
        {'< Back to list'}
      </BackToList>
      <CryptoForm />
    </Container>
  </SafeAreaView>
);

export default AddNewCryptoCurrency;
