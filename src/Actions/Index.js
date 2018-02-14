import axios from 'axios';

export const FETCH_INVOICES = 'FETCH_INVOICES';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const ADD_INVOICE = 'ADD_INVOICE';
export const FETCH_USER = 'FETCH_USER';
export const ADD_VEHICLE = 'ADD_VEHICLE';
export const DELETE_VEHICLE = 'DELETE_VEHICLE';


export function fetchInvoices() {
  const config = {
  headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2IxYjQ2ZGNjNTk3NDI3ODc0YmViMCIsImlhdCI6MTUxODI4NDYyNX0.h_S_ir6XOofF33RvYKf4Eai6EV1huAl2t0If2VvGBlA'}
};
  const request = axios.get("http://localhost:3005/api/invoice", config);

  return {
    type: FETCH_INVOICES,
    payload: request
  };
}

export function deleteInvoice(id, cb) {
  console.log(id);
  const config = {
  headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2IxYjQ2ZGNjNTk3NDI3ODc0YmViMCIsImlhdCI6MTUxODI4NDYyNX0.h_S_ir6XOofF33RvYKf4Eai6EV1huAl2t0If2VvGBlA'}
};
  const request = axios.delete(`http://localhost:3005/api/invoice/${id}`, config).then( () => cb() );
  console.log(id);

  return{
    type: DELETE_INVOICE,
    payload: request
  }
}

export function addInvoice(invoice, cb) {
  const config = {
  headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2IxYjQ2ZGNjNTk3NDI3ODc0YmViMCIsImlhdCI6MTUxODI4NDYyNX0.h_S_ir6XOofF33RvYKf4Eai6EV1huAl2t0If2VvGBlA'}
};
  const request = axios.post(`http://localhost:3005/api/invoice`, invoice, config);
  return {
    type: ADD_INVOICE,
    payload: request
  }
}

export function fetchUser(id){
  const config = {
  headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2IxYjQ2ZGNjNTk3NDI3ODc0YmViMCIsImlhdCI6MTUxODI4NDYyNX0.h_S_ir6XOofF33RvYKf4Eai6EV1huAl2t0If2VvGBlA'}
};
  const request = axios.get(`http://localhost:3005/api/user`, config);
  console.log(id);
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function addVehicle(vehicle, cb) {
  const config = {
  headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2IxYjQ2ZGNjNTk3NDI3ODc0YmViMCIsImlhdCI6MTUxODI4NDYyNX0.h_S_ir6XOofF33RvYKf4Eai6EV1huAl2t0If2VvGBlA'}
};
  const request = axios.post(`http://localhost:3005/api/vehicle`, vehicle, config).then( ()=> cb() );
  return {
    type: ADD_VEHICLE,
    payload: null
  }
}

export function deleteVehicle(id, cb) {
  console.log(id);
  const config = {
  headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2IxYjQ2ZGNjNTk3NDI3ODc0YmViMCIsImlhdCI6MTUxODI4NDYyNX0.h_S_ir6XOofF33RvYKf4Eai6EV1huAl2t0If2VvGBlA'}
};
  const request = axios.delete(`http://localhost:3005/api/vehicle/${id}`, config).then( () => cb() );
  console.log(id);

  return{
    type: DELETE_VEHICLE,
    payload: request
  }
}
