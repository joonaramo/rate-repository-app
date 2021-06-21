import React from 'react';
import { useHistory } from 'react-router-native';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';

const initialValues = {
  username: '',
  password: '',
  password2: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Username must be between 1 and 30 characters')
    .max(30, 'Username must be between 1 and 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be between 5 and 50 characters')
    .max(50, 'Password must be between 5 and 50 characters'),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Please repeat password'),
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

export const SignUpContainer = ({ onSubmit }) => {
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
            <FormikTextInput
              name='password2'
              placeholder='Repeat password'
              secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text fontWeight='bold' color='white'>
                Sign Up
              </Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
