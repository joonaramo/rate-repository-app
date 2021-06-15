import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    top: Constants.statusBarHeight / 2,
  },
  tab: {
    marginLeft: 12,
    paddingVertical: 4,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} horizontal>
        <Pressable style={styles.tab}>
          <Link to='/'>
            <Text color='white' fontSize='subheading' fontWeight='bold'>
              Repositories
            </Text>
          </Link>
        </Pressable>
        <Pressable style={styles.tab}>
          <Link to='/signin'>
            <Text
              color='white'
              fontSize='subheading'
              fontWeight='bold'
              style={styles.text}
            >
              Sign In
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
