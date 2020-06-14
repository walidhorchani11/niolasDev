import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

const ManageProduct = () => {
  return (
    <View style={styles.screen}>
      <View>
        <Image style={styles.image}></Image>
      </View>
      <View>
        <Button style={styles.button} title="ajouter reference" />
        <Button style={styles.button} title="retirer reference" />
      </View>
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
  image: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
  },
  button: {},
});

export default ManageProduct;
