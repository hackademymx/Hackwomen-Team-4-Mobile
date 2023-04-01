import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import RegistroLugares from './Views/RegistroLugares';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RegistroLugares />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#f4f4f4",
  },
});
