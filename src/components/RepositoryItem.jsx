import React from 'react';
import { View, StyleSheet, Pressable, Linking } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryItemInfo from './RepositoryItemInfo';
import RepositoryItemStats from './RepositoryItemStats';

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 14,
  },
});

const RepositoryItem = ({ item }) => {
  const handlePress = () => {
    Linking.openURL(item.url);
  };
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
      {item.url && (
        <Pressable onPress={handlePress} style={styles.button}>
          <Text color='white' fontWeight='bold'>
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
