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
  const textInputStyle = {
    ...styles.input,
    borderColor: error && theme.colors.error,
  };

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
