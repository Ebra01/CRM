// src/components/Card.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;
