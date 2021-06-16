import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 45,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 12,
  },
});

const TextInput = ({ error, ...props }) => {
  const textInputStyle = {
    ...styles.input,
    borderColor: error ? theme.colors.error : theme.colors.textSecondary,
  };

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
