import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
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
      <View>
        <Text>LOGO</Text>
      </View>
      <Text
        style={{
          fontFamily: 'OpenSans-Regular',
          fontSize: 16,
          color: 'white',
        }}
      >
        Bienvenue ! Nicolas identifie les étiquettes de vos bouteilles de vin.
      </Text>
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
    backgroundColor: 'yellow',
  },
});

export default HomeScreen;
