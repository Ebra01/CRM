// src/features/customer/services.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchCustomersApi() {
  const customers = await AsyncStorage.getItem('customers');
  return customers ? JSON.parse(customers) : [];
}

export async function saveCustomerApi(customer) {
  const customers = await fetchCustomersApi();
  customers.push(customer);
  await AsyncStorage.setItem('customers', JSON.stringify(customers));
}
