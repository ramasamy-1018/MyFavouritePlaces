import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({icon, size, color, onPress, style}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed,style]}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.5,
  },
});
