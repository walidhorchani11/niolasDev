import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ImgPicker from '../components/ImgPicker';

const HomePage = (props) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text>LOGO</Text>
      </View>
      <Text>
        Bienvenue ! Nicolas identifie les étiquettes de vos bouteilles de vin
        simplement en les photographiant avec votre smartphone. Essayez de
        pointer votre appareil photo vers l'étiquette.
      </Text>
      <ImgPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFF8DC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default HomePage;
