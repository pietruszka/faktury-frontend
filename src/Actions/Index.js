import axios from 'axios';

export const FETCH_INVOICES = 'FETCH_INVOICES';
export const DELETE_INVOICE = 'DELETE_INVOICE';

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
