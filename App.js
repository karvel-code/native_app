import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={{
            uri: 'https://picsum.photos/200/300',
          }} style={{width: 200, height: 200}} blurRadius={10} fadeDuration={1000}>

        </Image>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // image: {
  //   width: "200px",
  //   height: "200px"
  // }
});
