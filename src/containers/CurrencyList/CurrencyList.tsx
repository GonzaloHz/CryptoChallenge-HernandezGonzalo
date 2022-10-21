import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import CryptoItem from '../../components/CryptoItem/CryptoItem';

const CurrencyList = ({data}) => {
  const renderItem = ({item}) => (
    <CryptoItem
      symbol={item.symbol}
      name={item.name}
      signal={item.signal}
      percentage={item.percentage}
      value={item.value}
      slug={item.slug}
      image={item.image}
    />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default CurrencyList;