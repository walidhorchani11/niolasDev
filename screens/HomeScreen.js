import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import ImgPicker from '../components/ImgPicker';

const HomeScreen = (props) => {
  const navigateTo = (screen, imageLink) => {
    props.navigation.navigate(screen, { imageLink: imageLink });
  };
  return (
    <ImageBackground
      source={require('../assets/img/bgImage.png')}
      style={styles.screen}
    >
      <View style={styles.descriptionContainer}>
        <Image
          source={require('../assets/img/logoNicolas.png')}
          style={styles.logo}
        />

        <Text style={styles.textDescription}>
          Bienvenue ! Nicolas identifie les étiquettes de vos bouteilles de vin.
        </Text>
      </View>
      <ImgPicker navigateTo={navigateTo} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 138,
    height: 119,
  },
});

export default HomeScreen;
