import {Image, StyleSheet, View, Text} from 'react-native';
import OutlinedButton from './OutlinedButton';
import {Colors} from '../constants/colors';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import ImageCropPicker from 'react-native-image-crop-picker';

const ImagePicker = ({image, handleImage}) => {
  const captureImage = async () => {
    try {
      const cameraPermissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);

      if (cameraPermissionStatus === RESULTS.GRANTED) {
        const result = await ImageCropPicker.openCamera({
          width: 200,
          height: 180,
          cropping: true,
          freeStyleCropEnabled: true,
        });

        if (!result.cancelled) {
          handleImage(result.path);
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  let imagePreview = (
    <Text style={styles.previewBoxText}>
      Please capture an image to view preview
    </Text>
  );

  if (image) {
    imagePreview = <Image source={{uri: image}} style={styles.image} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload an Image</Text>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton
        icon="camera"
        size={32}
        color={'white'}
        onPress={captureImage}>
        Capture Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
  imagePreview: {
    height: 200,
    marginVertical: 16,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  previewBoxText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: 'white',
  },
});
