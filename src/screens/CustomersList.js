// src/screens/CustomersList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { selectCustomersByRegion } from '../features/customer/selectors';

const CustomersList = ({ route, navigation }) => {
  const { region } = route.params;
  const customers = useSelector((state) => selectCustomersByRegion(state, region));

  const renderItem = ({ item }) => (
    <Card
      title={item.name}
      onPress={() => navigation.navigate('CustomerDetails', { customerId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customers in {region}</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
      <Button title="Add New Customer" onPress={() => navigation.navigate('NewCustomer')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default CustomersList;
