import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Colors } from '../constants/colors';

const DisplayPlace = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {title,image,description} = route?.params?.place

  useEffect(() => {
    navigation.setOptions({
      title: title
    })
  })

  return (
    <View style={styles.container}>
      <Image source={{uri:image}} style={styles.image}/>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

export default DisplayPlace

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 20,
    paddingVertical: 130
  },
  image: {
    height: 400
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: "white"
  }
})