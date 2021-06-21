import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import ReviewForm from './ReviewForm';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/repository/:id' exact>
          <SingleRepository />
        </Route>
        <Route path='/review' exact>
          <ReviewForm />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
