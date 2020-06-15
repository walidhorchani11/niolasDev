import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import AddPlaceForm from './AddPlaceForm';

const AddProductForm = (props) => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);
  const [buyingPrice, setBuyingPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [year, setYear] = useState('');
  const [volume, setVolume] = useState('');

  const changeNameHandler = () => {
    if (name.trim().length === 0) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>nom</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(val) => setName(val)}
            onBlur={changeNameHandler}
          ></TextInput>
          {!nameIsValid && <Text>Merci d'entrer un nom valide</Text>}
        </View>
        <AddPlaceForm />
        <View style={styles.formControl}>
          <Text style={styles.label}>prix d'achat</Text>
          <TextInput
            style={styles.input}
            value={buyingPrice}
            onChangeText={(val) => setBuyingPrice(val)}
            keyboardType="decimal-pad"
          ></TextInput>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>prix de vente</Text>
          <TextInput
            style={styles.input}
            value={sellingPrice}
            onChangeText={(val) => setSellingPrice(val)}
            keyboardType="decimal-pad"
          ></TextInput>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Annee</Text>
          <TextInput
            style={styles.input}
            value={year}
            onChangeText={(val) => setYear(val)}
          ></TextInput>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Volume</Text>
          <TextInput
            style={styles.input}
            value={volume}
            onChangeText={(val) => setVolume(val)}
            keyboardType="numeric"
          ></TextInput>
        </View>
      </View>
      <View>
        <Button
          title="enregistrer"
          onPress={() => props.navigateTo('DetailProduct')}
        />
      </View>
    </ScrollView>
    // lieu
  );
};

const styles = StyleSheet.create({
  formControl: {},
  label: {},
  input: { borderBottomWidth: 1, borderBottomColor: 'grey' },
  form: {},
});

export default AddProductForm;
