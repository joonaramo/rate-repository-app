import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const initialValues = {
  username: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text fontWeight='bold' color='white'>
                Sign In
              </Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
