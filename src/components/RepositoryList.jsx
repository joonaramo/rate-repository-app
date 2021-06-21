import React from 'react';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
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
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
