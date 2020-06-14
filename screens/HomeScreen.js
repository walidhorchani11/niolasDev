import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImgPicker from '../components/ImgPicker';

const HomeScreen = (props) => {
  const navigateTo = (screen, imageLink) => {
    props.navigation.navigate(screen, { imageLink: imageLink });
  };
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
      <ImgPicker navigateTo={navigateTo} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default HomeScreen;
