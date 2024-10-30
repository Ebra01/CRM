// src/features/customer/reducers.js
import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    regions: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCustomersRequest: (state) => {
      state.loading = true;
    },
    fetchCustomersSuccess: (state, action) => {
      const { customers, regions } = action.payload;
      state.customers = customers;
      state.regions = [...new Set([...state.regions, ...regions])];
    },
    fetchCustomersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCustomer: (state, action) => {
      const { name, region } = action.payload;
      if (region && !state.regions.includes(region)) {
        state.regions.push(region);
      }
      state.customers.push({ id: Date.now(), name, region });
    },
    updateCustomer: (state, action) => {
      const { id, name, region } = action.payload;
      const existingCustomer = state.customers.find(customer => customer.id === id);
      if (existingCustomer) {
        existingCustomer.name = name;
        existingCustomer.region = region;
      }
      if (region && !state.regions.includes(region)) {
        state.regions.push(region);
      }
    },
  },
});

export const { fetchCustomersRequest, fetchCustomersSuccess, fetchCustomersFailure, addCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
