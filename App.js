import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomePage from './components/HomePage';

export default function App() {
  const [homePage, setHomePage] = useState(true);
  return <View style={styles.container}>{homePage && <HomePage />}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
