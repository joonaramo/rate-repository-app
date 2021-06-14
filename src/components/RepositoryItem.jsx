import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryItemInfo from './RepositoryItemInfo';
import RepositoryItemStats from './RepositoryItemStats';

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: 'white',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemInfo
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        ownerAvatarUrl={item.ownerAvatarUrl}
      />
      <RepositoryItemStats
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
