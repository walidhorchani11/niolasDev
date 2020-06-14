import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AddProductForm from '../components/productForm/AddProductForm';

const DetailProductScreen = (props) => {
  const navigateTo = (screen) => {
    props.navigation.navigate(screen);
  };
  return (
    <View style={styles.screen}>
      <AddProductForm navigateTo={navigateTo} />
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

export default DetailProductScreen;
