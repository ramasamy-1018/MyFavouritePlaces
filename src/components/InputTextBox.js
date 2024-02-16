import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';

const InputTextBox = ({children, ...otherProps}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
      <TextInput
        style={styles.textInputBox}
        {...otherProps}
        placeholderTextColor={'white'}
      />
    </View>
  );
};

export default InputTextBox;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
  textInputBox: {
    marginVertical: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary700,
    color: 'white',
    fontSize: 16,
  },
});
