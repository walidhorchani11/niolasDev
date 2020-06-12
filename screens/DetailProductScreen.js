import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AddProductFormScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>form to add product</Text>
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

export default AddProductFormScreen;
