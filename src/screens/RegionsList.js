// src/screens/RegionsList.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomersRequest } from '../features/customer/reducers';
import Card from '../components/Card';
import { selectAllRegions } from '../features/customer/selectors';

const RegionsList = ({ navigation }) => {
  const dispatch = useDispatch();
  const regions = useSelector(selectAllRegions);

  useEffect(() => {
    dispatch(fetchCustomersRequest());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <Card title={item} onPress={() => navigation.navigate('CustomersList', { region: item })} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regions List</Text>
      <FlatList
        data={regions}
        keyExtractor={(item) => item}
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

export default RegionsList;
