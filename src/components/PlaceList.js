import {StyleSheet, FlatList, View, Text} from 'react-native';
import PlaceItem from './PlaceItem';

const PlaceList = ({places}) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No favourite places added...Please add some
        </Text>
      </View>
    );
  }
  return (
    <>
      <FlatList
        style={styles.list}
        data={places}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PlaceItem item={item} />}
      />
    </>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 20,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 18,
    color: 'white',
  },
});
