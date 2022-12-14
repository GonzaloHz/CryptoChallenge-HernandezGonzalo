import {DELETE_CRYPTO, GET_CRYPTO, UPDATE_CRYPTO} from './actiontypes';
import CryptoTypes from '../../types/types';
import {Alert} from 'react-native';
import {API_URL} from '@env';

export const getCrypto = (query: string, cryptos: CryptoTypes) => {
  return async dispatch => {
    try {
      const dataAPI = await fetch(
        `${API_URL}assets/${query}/metrics/market-data`,
      );
      const data = await dataAPI.json();
      if (!data.data.Asset.id) {
        throw new Error(`${Alert.alert(`I can't found ${query}`)}`);
      }
      const chosenCrypto = cryptos.filter(
        c => c.Asset.id === data.data.Asset.id,
      );
      if (data.data && chosenCrypto.length !== 0) {
        throw new Error(`${Alert.alert('This crypto is already added')}`);
      }
      if (data.data && chosenCrypto.length === 0) {
        dispatch({
          type: GET_CRYPTO,
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCrypto = (id: string, cryptos: CryptoTypes[]) => {
  const newCryptos = cryptos.filter(c => c.Asset.id !== id);

  return dispatch => {
    dispatch({
      type: DELETE_CRYPTO,
      payload: newCryptos,
    });
  };
};

export const updateCrypto = (cryptos: CryptoTypes[]) => {
  return async dispatch => {
    try {
      const cryptosUpdated: CryptoTypes[] = [];
      const cryptolisted: string[] = cryptos.map(c => {
        return c.Asset.symbol;
      });

      for (let i = 0; i < cryptos.length; i++) {
        const dataAPI = await fetch(
          `${API_URL}assets/${cryptolisted[i]}/metrics/market-data`,
        );
        const data = await dataAPI.json();
        cryptosUpdated.push(data.data);
      }
      dispatch({
        type: UPDATE_CRYPTO,
        payload: cryptosUpdated,
      });
    } catch (error) {
      console.log(error);
    }
  };
};