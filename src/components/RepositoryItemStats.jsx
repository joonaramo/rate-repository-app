import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statsText: {
    alignItems: 'center',
  },
  number: {
    paddingBottom: 4,
  },
});

const RepositoryItemStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const formatNumber = (num) =>
    Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);

  return (
    <View style={styles.container}>
      <View style={styles.statsText}>
        <Text
          style={styles.number}
          testID='stargazersCount'
          fontSize='subheading'
          fontWeight='bold'
        >
          {formatNumber(stargazersCount)}
        </Text>
        <Text color='secondaryText'>Stars</Text>
      </View>
      <View style={styles.statsText}>
        <Text
          style={styles.number}
          testID='forksCount'
          fontSize='subheading'
          fontWeight='bold'
        >
          {formatNumber(forksCount)}
        </Text>
        <Text color='secondaryText'>Forks</Text>
      </View>
      <View style={styles.statsText}>
        <Text
          style={styles.number}
          testID='reviewCount'
          fontSize='subheading'
          fontWeight='bold'
        >
          {formatNumber(reviewCount)}
        </Text>
        <Text color='secondaryText'>Reviews</Text>
      </View>
      <View style={styles.statsText}>
        <Text
          style={styles.number}
          testID='ratingAverage'
          fontSize='subheading'
          fontWeight='bold'
        >
          {formatNumber(ratingAverage)}
        </Text>
        <Text color='secondaryText'>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemStats;
