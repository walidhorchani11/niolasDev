import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [buyingPrice, setBuyingPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [annee, setAnnee] = useState('');
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>nom</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(val) => setName(val)}
            returnKeyType="search"
          ></TextInput>
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
