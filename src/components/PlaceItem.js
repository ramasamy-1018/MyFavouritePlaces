import {Image, Pressable, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useContext, useState} from 'react';
import {Colors} from '../constants/colors';
import IconButton from './IconButton';
import {PlaceContext} from '../../store/PlaceContext';
import OutlinedButton from './OutlinedButton';
import { useNavigation } from '@react-navigation/native';

const PlaceItem = ({item}) => {
  const {title, image, description, id} = item;

  const {deletePlace} = useContext(PlaceContext);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  function handleModal() {
    setShowModal(prevValue => !prevValue);
  }

  function handleView() {
    setShowModal(false);
    navigation.navigate("DisplayPlace",{
      place:item
    })
  }

  function handleEdit(item) {
    setShowModal(false);
    navigation.navigate("AddPlace",{
      place:item
    })
  }

  return (
    <>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={handleModal}>
        <View style={styles.itemBox}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <IconButton
            icon="trash"
            size={32}
            color={Colors.gray700}
            style={styles.trashIconStyle}
            onPress={() => deletePlace(id)}
          />
        </View>
      </Pressable>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <OutlinedButton style={styles.modalButton} onPress={handleView}>
              View
            </OutlinedButton>
            <OutlinedButton
              style={styles.modalButton}
              onPress={() => handleEdit(item)}>
              Edit
            </OutlinedButton>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 12,
    backgroundColor: Colors.primary500,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
    flex:2
  },
  image: {
    width: 120,
    height: 100,
  },
  title: {
    color: Colors.gray700,
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 4,
  },
  description: {
    color: Colors.gray700,
    fontWeight: 'medium',
    fontSize: 15,
    paddingVertical: 4,
  },
  trashIconStyle: {
    position: 'absolute',
    right: 4,
    top: '50%',
  },
  pressed: {
    opacity: 0.5,
  },
  modalContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '80%',
    height: 140,
    position: 'absolute',
    top: '40%',
    left: '10%',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    minWidth: 120,
    textAlign: 'center',
  },
});
