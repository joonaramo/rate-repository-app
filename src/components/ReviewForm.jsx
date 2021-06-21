import React from 'react';
import { useHistory } from 'react-router-native';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import useReview from '../hooks/useReview';

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: null,
  text: '',
};

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required('Username is required'),
  ownerName: yup.string().required('Password is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be value from 0 to 100')
    .max(100, 'Rating must be value from 0 to 100'),
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

export const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput
              name='repositoryName'
              placeholder='Repository name'
            />
            <FormikTextInput
              name='ownerName'
              placeholder='Repository owner name'
            />
            <FormikTextInput
              name='rating'
              placeholder='Rating between 0 and 100'
            />
            <FormikTextInput name='text' placeholder='Review' multiline />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text fontWeight='bold' color='white'>
                Create a review
              </Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

const ReviewForm = () => {
  const [review] = useReview();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await review({
        repositoryName,
        ownerName,
        rating,
        text,
      });
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
