import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 6,
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
  languageTag: {
    padding: 4,
    borderRadius: 5,
    lineHeight: 28,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const RepositoryItemInfo = ({
  fullName,
  description,
  language,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText} fontSize='subheading' fontWeight='bold'>
          {fullName}
        </Text>
        <Text color='textSecondary' style={styles.infoText}>
          {description}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text
            color='white'
            backgroundColor='primary'
            style={styles.languageTag}
          >
            {language}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemInfo;
