import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ManageProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Screen for adding & deleting product</Text>
      <Button
        title="Go to form"
        onPress={() => this.props.navigation.navigate('AddProductForm')}
      />
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
