import React, { useState, Component } from 'react';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends Component {
  renderHeader = () => {
    const { order, setOrder, searchKeyword, setSearchKeyword } = this.props;

    return (
      <RepositoryListHeader
        order={order}
        setOrder={setOrder}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    );
  };

  renderItem = ({ item }) => {
    const { handlePress } = this.props;
    return (
      <Pressable onPress={() => handlePress(item)}>
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  render() {
    const { repositories } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={(item) => this.renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const RepositoryList = () => {
  const [order, setOrder] = useState('CREATED_AT:DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const orderBy = order.split(':')[0];
  const orderDirection = order.split(':')[1];
  const { repositories } = useRepositories(
    orderBy,
    orderDirection,
    searchKeyword
  );

  const history = useHistory();
  const handlePress = (item) => {
    history.push(`/repository/${item.id}`);
  };

  return (
    <RepositoryListContainer
      order={order}
      setOrder={setOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      handlePress={handlePress}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
