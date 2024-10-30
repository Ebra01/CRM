// src/screens/EditCustomer.js
import React, { useState, useEffect } from 'react';
import { TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomer } from '../features/customer/reducers';
import Button from '../components/Button';

const EditCustomer = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { customerId } = route.params;
  const customer = useSelector((state) => state.customer.customers.find(c => c.id === customerId));
  const regions = useSelector((state) => state.customer.regions);

  const [name, setName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [newRegion, setNewRegion] = useState('');

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setSelectedRegion(customer.region);
    }
  }, [customer]);

  const handleSubmit = () => {
    const updatedData = {
      ...customer,
      name,
      region: newRegion ? newRegion : selectedRegion,
    };
    dispatch(updateCustomer(updatedData));
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
      <Button title="Update Customer" onPress={handleSubmit} />
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

export default EditCustomer;
