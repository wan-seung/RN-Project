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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
        {/* <Image style={style.image} source={{uri: }}/> */}
        <Image style={styles.image} source={require('./assets/wanie.jpeg')} />
        <View>
          <Image style={styles.image} source={require('./assets/splash.png')} />
        </View>
        <TouchableOpacity>
          <Text>뭐가다를까</Text>
          <View></View>
        </TouchableOpacity>
        <TextInput>hello</TextInput>
        <TextInput>Open up App.js to start working on your app!</TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
