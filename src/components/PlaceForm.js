import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext, useLayoutEffect, useRef, useState} from 'react';
import ImagePicker from './ImagePicker';
import InputTextBox from './InputTextBox';
import OutlinedButton from './OutlinedButton';
import {PlaceContext} from '../../store/PlaceContext';
import {useNavigation, useRoute} from '@react-navigation/native';

const PlaceForm = () => {
  console.log("Function")
  const navigation = useNavigation();
  const route = useRoute();

  const isEditing = !!route.params?.place;

  const [title, setTitle] = useState(route.params?.place?.title);
  const [description, setDescription] = useState(
    route.params?.place?.description,
  );
  const [image, setImage] = useState(route.params?.place?.image);

  const {addPlace, editPlace} = useContext(PlaceContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Place' : ' Add a new place',
    });
  }, [navigation, isEditing]);

  function handleTitle(text) {
    setTitle(text);
    console.log("Inside",title)
  }

  function handleDescription(text) {
    setDescription(text);
  }

  function handleImage(path) {
    setImage(path);
  }

  function handleSave() {
    console.log("isEditing",isEditing)
    if (title && description && image) {
      if (!isEditing) {
        addPlace({
          title: title,
          description: description,
          image: image,
        });
        navigation.goBack();
      } else {
        editPlace({
          title: title,
          description: description,
          image: image,
          id: route.params.place.id,
        });
        navigation.goBack();
      }
    } else {
      Alert.alert('Missing', 'Please fill all the details');
    }
  }
  console.log("Outside",title)

  return (
    <ScrollView style={styles.container}>
      <InputTextBox
        placeholder="Enter a title"
        maxLength={30}
        onChangeText={handleTitle}
        value={title}>
        Title
      </InputTextBox>
      <ImagePicker handleImage={handleImage} image={image} />
      <InputTextBox
        placeholder="What did you like about this place"
        multiline
        numberOfLines={8}
        onChangeText={handleDescription}
        value={description}>
        Description
      </InputTextBox>
      <View style={styles.saveButton}>
        <OutlinedButton
          icon="save"
          size={32}
          color={'white'}
          onPress={handleSave}>
          Save Place
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  saveButton: {
    marginTop: 10
  }
});
