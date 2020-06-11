import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AddPlaceForm = () => {
  const [places, setPlaces] = useState([0]);

  const addPlaceInputHandler = () => {
    setPlaces((currentPlaces) => [...currentPlaces, 0]);
  };

  const displayPlacesInput = () => {
    return places.map((place, indice) => (
      <View key={indice}>
        <Text style={styles.label}>{`Lieu ${indice + 1}`}</Text>
        <TextInput
          style={styles.input}
          placeholder={place.toString()}
          value={place}
          keyboardType="numeric"
          onChangeText={(val) => {
            const newPlaces = places;
            newPlaces[indice] = val * 1;
            setPlaces(newPlaces);
          }}
        ></TextInput>
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
