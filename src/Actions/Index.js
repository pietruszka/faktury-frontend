import axios from 'axios';

export const FETCH_INVOICES = 'FETCH_INVOICES';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const ADD_INVOICE = 'ADD_INVOICE';
export const FETCH_USER = 'FETCH_USER';
export const ADD_VEHICLE ='ADD_VEHICLE';

export function fetchInvoices() {
  const request = axios.get("http://localhost:3004/faktury");

  return {
    type: FETCH_INVOICES,
    payload: request
  };
}

export function deleteInvoice(id, cb) {
  const request = axios.delete(`http://localhost:3004/faktury/${id}`).then( () => cb() );
  console.log(id);

  return{
    type: DELETE_INVOICE,
    payload: request
  }
}

export function addInvoice(invoice, cb) {
  const request = axios.post(`http://localhost:3004/faktury`, invoice);
  return {
    type: ADD_INVOICE,
    payload: request
  }
}

export function fetchUser(id){
  const request = axios.get(`http://localhost:3004/user?id=${id}`);
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function addVehicle(vehicle) {
  console.log(vehicle);
  return {
    type: ADD_VEHICLE,
    payload: null
  }
}
