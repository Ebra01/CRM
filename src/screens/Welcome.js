// src/screens/Welcome.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Customer Relationship Management App</Text>
      <Button title="View Regions" onPress={() => navigation.navigate('RegionsList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Welcome;
