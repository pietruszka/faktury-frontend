import axios from 'axios';

export const FETCH_INVOICES = 'FETCH_INVOICES';

export function fetchInvoices() {
  const request = axios.get("http://localhost:3004/faktury");

  return {
    type: FETCH_INVOICES,
    payload: request
  };
}
