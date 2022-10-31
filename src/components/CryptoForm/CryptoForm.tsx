import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  AddButton,
  AddCryptoText,
  AddCryptoTitle,
  InputCrypto,
  MidContainer,
} from './style';
import theme from '../../utils/theme';
import {getCrypto} from '../../store/actions/actions';
import {useAppDispatch} from '../../store/store/store';

const CryptoForm = () => {
  const [cryptoInput, setCryptoInput] = useState('');
  const {cryptos} = useSelector(state => state.cryptos);
  const dispatch = useAppDispatch();
  const handleOnPress = () => {
    dispatch(getCrypto(cryptoInput, cryptos));
    setCryptoInput('');
  };

  return (
    <MidContainer>
      <AddCryptoTitle>Add a Cryptocurrency</AddCryptoTitle>
      <InputCrypto
        onChangeText={setCryptoInput}
        value={cryptoInput}
        placeholder="Use a name or a ticker symbol..."
        placeholderTextColor={theme.colors.grayInputPlaceholder}
        signal={cryptoInput.length > 0}
      />
      <AddButton
        onPress={handleOnPress}
        disabled={cryptoInput.length > 0 ? false : true}>
        <AddCryptoText signal={cryptoInput.length > 0}>Add</AddCryptoText>
      </AddButton>
    </MidContainer>
  );
};

export default CryptoForm;