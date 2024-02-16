import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import {Colors} from '../constants/colors';

const OutlinedButton = ({icon, size, color, children, onPress, style}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}>
      {icon && <IconButton icon={icon} size={size} color={color} />}
      <Text style={[styles.text]}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    minWidth: 160,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    color: 'white'
  },
});
