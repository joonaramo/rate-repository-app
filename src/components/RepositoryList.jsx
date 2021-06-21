import React, { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortMenu = ({ order, setOrder }) => {
  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue, itemIndex) => {
        setOrder(itemValue);
      }}
    >
      <Picker.Item label='Latest repositories' value='CREATED_AT:DESC' />
      <Picker.Item
        label='Highest rated repositories'
        value='RATING_AVERAGE:DESC'
      />
      <Picker.Item
        label='Lowest rated repositories'
        value='RATING_AVERAGE:ASC'
      />
    </Picker>
  );
};

export const RepositoryListContainer = ({ repositories, order, setOrder }) => {
  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => {
    const handlePress = () => {
      history.push(`/repository/${item.id}`);
    };
    return (
      <Pressable onPress={handlePress}>
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <SortMenu order={order} setOrder={setOrder} />}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState('CREATED_AT:DESC');
  const orderBy = order.split(':')[0];
  const orderDirection = order.split(':')[1];
  const { repositories } = useRepositories(orderBy, orderDirection);

  return (
    <RepositoryListContainer
      order={order}
      setOrder={setOrder}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
