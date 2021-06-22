import React from 'react';
import { format } from 'date-fns';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    backgroundColor: 'white',
  },
  separator: {
    height: 10,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    display: 'flex',
    flexShrink: 1,
    marginLeft: 16,
    marginBottom: 8,
  },
  infoText: {
    marginBottom: 8,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  if (repository) {
    return <RepositoryItem item={repository} />;
  }
  return null;
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text fontSize='heading' color='primary' fontWeight='bold'>
          {review.rating}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
          testID='fullName'
          style={styles.infoText}
          fontSize='subheading'
          fontWeight='bold'
        >
          {review.user.username}
        </Text>
        <Text
          testID='description'
          color='textSecondary'
          style={styles.infoText}
        >
          {format(new Date(review.createdAt), 'dd.MM.Y')}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id, 4);
  const reviews =
    repository && repository.reviews
      ? repository.reviews.edges.map((edge) => edge.node)
      : [];
  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      style={styles.listContainer}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
    />
  );
};

export default SingleRepository;
