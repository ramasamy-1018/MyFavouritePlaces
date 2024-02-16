import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlaces from './src/screens/AllPlaces';
import AddPlace from './src/screens/AddPlace';
import IconButton from './src/components/IconButton';
import {Colors} from './src/constants/colors';
import {KeyboardAvoidingView, StatusBar, StyleSheet} from 'react-native';
import PlaceContextProvider from './store/PlaceContext';
import DisplayPlace from './src/screens/DisplayPlace';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary500} barStyle={"light-content"}/>
      <KeyboardAvoidingView style={styles.container}>
        <PlaceContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: Colors.gray700,
                contentStyle: {backgroundColor: Colors.gray700},
              }}>
              <Stack.Screen
                name="AllPlaces"
                component={AllPlaces}
                options={({navigation}) => ({
                  title: 'My Favourite Places',
                  headerRight: ({tintColor}) => (
                    <IconButton
                      icon="add"
                      size={24}
                      color={tintColor}
                      onPress={() => {
                        navigation.navigate('AddPlace');
                      }}
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="AddPlace"
                component={AddPlace}
                options={{title: 'Add a new place'}}
              />
              <Stack.Screen name="DisplayPlace" component={DisplayPlace} />
            </Stack.Navigator>
          </NavigationContainer>
        </PlaceContextProvider>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
