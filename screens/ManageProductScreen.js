import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const ManageProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      {props.navigation.state.params && (
        <Image
          source={{ uri: props.navigation.state.params.imageLink }}
          style={styles.image}
        />
      )}
      <View>
        <Button
          style={styles.button}
          title="ajouter reference"
          onPress={() => props.navigation.navigate('AddProductForm')}
        />
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

export default ManageProductScreen;
