import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import DetailsCard from '../components/DetailsCard';

const CustomerDetails = ({ route, navigation }) => {
  const { customerId } = route.params;
  const customer = useSelector((state) =>
    state.customer.customers.find((c) => c.id === customerId)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Details</Text>
      {customer ? (
        <DetailsCard name={customer.name} region={customer.region} />
      ) : (
        <Text>No customer found.</Text>
      )}
      <Button title="Edit Customer" onPress={() => navigation.navigate('EditCustomer', { customerId })} />
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
});

export default CustomerDetails;
