import React from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNewCryptoCurrency from './src/screens/AddNewCryptoCurrency/AddNewCryptoCurrency';
import {Provider} from 'react-redux';
import store from './src/store/store/store';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddCrypto" component={AddNewCryptoCurrency} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;