import React from 'react';
import { View, StyleSheet } from 'react-native';
import SortMenu from './SortMenu';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
});

const RepositoryListHeader = ({
  order,
  setOrder,
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        key='search'
        value={searchKeyword}
        onChangeText={(value) => setSearchKeyword(value)}
        placeholder='Search'
      />
      <SortMenu order={order} setOrder={setOrder} />
    </View>
  );
};

export default RepositoryListHeader;
