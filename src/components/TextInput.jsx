import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 45,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 4,
    paddingLeft: 12,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
