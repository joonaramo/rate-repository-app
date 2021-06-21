import React from 'react';
import { useApolloClient } from '@apollo/client';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { authorizedUser } = useAuthorizedUser();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

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
        {authorizedUser ? (
          <>
            <Pressable style={styles.tab}>
              <Link to='/review'>
                <Text
                  color='white'
                  fontSize='subheading'
                  fontWeight='bold'
                  style={styles.text}
                >
                  Create a Review
                </Text>
              </Link>
            </Pressable>
            <Pressable style={styles.tab}>
              <Text
                color='white'
                fontSize='subheading'
                fontWeight='bold'
                style={styles.text}
                onPress={() => signOut()}
              >
                Sign Out
              </Text>
            </Pressable>
          </>
        ) : (
          <>
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
            <Pressable style={styles.tab}>
              <Link to='/signup'>
                <Text
                  color='white'
                  fontSize='subheading'
                  fontWeight='bold'
                  style={styles.text}
                >
                  Sign Up
                </Text>
              </Link>
            </Pressable>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
