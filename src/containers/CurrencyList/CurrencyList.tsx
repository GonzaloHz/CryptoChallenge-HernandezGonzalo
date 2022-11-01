import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import CryptoItem from '../../components/CryptoItem/CryptoItem';

const CurrencyList = ({data}) => {
  const renderItem = ({item}) => <CryptoItem item={item} />;

  return (
    <SafeAreaView> 
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.Asset.name}
      />
    </SafeAreaView>
  );
};

export default CurrencyList;