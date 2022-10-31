import styled from 'styled-components';
import theme from '../../utils/theme';

export const MidContainer = styled.View`
  background-color: ${theme.colors.white};
  padding-top: 30px;
`;

export const AddCryptoTitle = styled.Text`
  color: ${theme.colors.black};
  font-weight: bold;
  padding-top: 150px;
  padding-bottom: 22px;
  font-size: 27px;
`;

export const InputCrypto = styled.TextInput`
  padding-bottom: 20px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${theme.colors.whiteDisabled};
  border: 2.5px solid
    ${props => (props.signal ? theme.colors.yellow : theme.colors.grayDisabled)};
`;

export const AddButton = styled.TouchableOpacity`
  height: 48px;
  width: 50%;
  background-color: ${theme.colors.yellow};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 15px;
  margin-left: auto;
  border-radius: 5px;
`;

export const AddCryptoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props =>
    props.signal ? theme.colors.blue : theme.colors.yellowDisabled};
`;