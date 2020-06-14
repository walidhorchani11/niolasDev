import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const ManageProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Screen for adding & deleting product</Text>
      <Button
        title="Go to form"
        onPress={() => props.navigation.navigate('AddProductForm')}
      />
      {props.navigation.state.params && (
        <Image
          source={{ uri: props.navigation.state.params.imageLink }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default ManageProductScreen;
