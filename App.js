import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          {/* <Image style={style.image} source={{uri: }}/> */}
          <Image style={styles.image} source={require('./assets/wanie.jpeg')} />
          <View>
            <TouchableOpacity activeOpacity={0.3}>
              <Text>user name : </Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.profileContainer}>
          <Image style={styles.image} source={require('./assets/you.png')} />
          <View>
            <TouchableOpacity activeOpacity={0.3}>
              <Text>user name : </Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.textInput} />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

{
  /* <StatusBar style="light" /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginTop: 10,
  },
  textInput: {
    width: 100,
    height: 50,
    borderWidth: 1,
  },
});
