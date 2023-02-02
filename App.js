import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cesta />
    </SafeAreaView>
  );
}

