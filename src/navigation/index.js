// src/navigation/Index.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import RegionsList from '../screens/RegionsList';
import CustomersList from '../screens/CustomersList';
import CustomerDetails from '../screens/CustomerDetails';
import NewCustomer from '../screens/NewCustomer';
import EditCustomer from '../screens/EditCustomer';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="RegionsList" component={RegionsList} />
      <Stack.Screen name="CustomersList" component={CustomersList} />
      <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
      <Stack.Screen name="NewCustomer" component={NewCustomer} />
      <Stack.Screen name="EditCustomer" component={EditCustomer} />
    </Stack.Navigator>
  );
}
