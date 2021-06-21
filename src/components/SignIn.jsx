import React from 'react';
import { useHistory } from 'react-router-native';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

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

export const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
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

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
