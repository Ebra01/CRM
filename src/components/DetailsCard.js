import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DetailsCard = ({ name, region }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Customer Information</Text>
      <Text style={styles.cardText}>Name: {name}</Text>
      <Text style={styles.cardText}>Region: {region}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetailsCard;
