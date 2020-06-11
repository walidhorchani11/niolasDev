import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);
  const [buyingPrice, setBuyingPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [annee, setAnnee] = useState('');

  const changeNameHandler = (val) => {
    if (val.trim().length === 0) {
      setNameIsValid(false);
    }
    setName(val);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>nom</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={changeNameHandler}
            onBlur={() => console.log('text bluredddddd')}
          ></TextInput>
          {!nameIsValid && <Text>Merci d'entrer un nom valide</Text>}
        </View>

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
            value={annee}
            onChangeText={(val) => setAnnee(val)}
            keyboardType=""
          ></TextInput>
        </View>
      </View>
    </ScrollView>
    // lieu
  );
};

const styles = StyleSheet.create({
  formControl: {},
  label: {},
  input: {},
  form: {},
});

export default AddProductForm;
