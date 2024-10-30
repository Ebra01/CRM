// src/screens/NewCustomer.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer } from '../features/customer/reducers';
import Button from '../components/Button';
import { schedulePushNotification } from '../utils/NotificationHandler';

const NewCustomer = ({ navigation }) => {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.customer.regions);
  const [name, setName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [newRegion, setNewRegion] = useState('');

  const handleSubmit = async() => {
    const customerData = {
      name,
      region: newRegion ? newRegion : selectedRegion,
    };
    dispatch(addCustomer(customerData));
    await schedulePushNotification(customerData.name);
    navigation.navigate('RegionsList'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Customer Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter customer name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Select a Region</Text>
      <Picker
        selectedValue={selectedRegion}
        onValueChange={(itemValue) => setSelectedRegion(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a region" value="" />
        {regions.map((region) => (
          <Picker.Item key={region} label={region} value={region} />
        ))}
      </Picker>
      <Text style={styles.label}>Or Enter a New Region</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a new region"
        value={newRegion}
        onChangeText={setNewRegion}
      />
      <Button title="Add Customer" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NewCustomer;
