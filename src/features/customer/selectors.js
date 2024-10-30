// src/features/customer/selectors.js
import { createSelector } from 'reselect';

const selectCustomers = (state) => state.customer.customers;

export const selectCustomersByRegion = createSelector(
  [selectCustomers, (state, region) => region],
  (customers, region) => customers.filter((customer) => customer.region === region)
);

export const selectAllRegions = (state) => state.customer.regions;
