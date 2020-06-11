import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AddPlaceForm = (props) => {
  const [places, setPlaces] = useState([0]);

  const addPlaceInputHandler = () => {
    console.log('add polace handler putted ...');
    setPlaces((currentPlaces) => [...currentPlaces, 0]);
    console.log('after add:::/', places);
  };

  const displayPlacesInput = () => {
    return places.map((place, indice) => (
      <View key={indice}>
        <Text style={styles.label}>{`Lieu ${indice + 1}`}</Text>
        <TextInput style={styles.input} value={places[indice]}></TextInput>
      </View>
    ));
  };

  return (
    <View style={styles.formControl}>
      {displayPlacesInput()}
      <Button title="ajouter lieu" onPress={addPlaceInputHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {},
  label: {},
  input: { borderBottomWidth: 1, borderBottomColor: 'grey' },
  form: {},
});

export default AddPlaceForm;
