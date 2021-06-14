import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
    display: 'flex',
  },
  text: {
    marginLeft: 12,
    top: Constants.statusBarHeight / 2,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text
          color='white'
          fontSize='subheading'
          fontWeight='bold'
          style={styles.text}
        >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
