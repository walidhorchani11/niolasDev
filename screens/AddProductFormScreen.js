import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const DetailProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>information of product</Text>
      <Button
        title="Go to information"
        onPress={() => this.props.navigation.navigate('DetailProduct')}
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

export default DetailProductScreen;
