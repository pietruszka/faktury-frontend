import axios from 'axios';
import { getCookie } from './../cookies';

export const FETCH_INVOICES = 'FETCH_INVOICES';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const ADD_INVOICE = 'ADD_INVOICE';
export const FETCH_USER = 'FETCH_USER';
export const ADD_VEHICLE = 'ADD_VEHICLE';
export const DELETE_VEHICLE = 'DELETE_VEHICLE';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const UPLOAD_FILE = 'UPLOAD_FILE';

export function fetchInvoices() {
  const token = getCookie('token');
  const config = {
  headers: {'authorization': token}
};
  const request = axios.get("http://localhost:3005/api/invoice", config);

  return {
    type: FETCH_INVOICES,
    payload: request
  };
}

export function deleteInvoice(id, cb) {
  const token = getCookie('token');
  console.log(id);
  const config = {
  headers: {'authorization': token}
};
  const request = axios.delete(`http://localhost:3005/api/invoice/${id}`, config).then( () => cb() );
  console.log(id);

  return{
    type: DELETE_INVOICE,
    payload: request
  }
}

export function addInvoice(invoice, cb) {
  const token = getCookie('token');
  const config = {
  headers: {'authorization': token}
};
  const request = axios.post(`http://localhost:3005/api/invoice`, invoice, config).then(()=> cb());
  return {
    type: ADD_INVOICE,
    payload: request
  }
}

export function fetchUser(){
  const token = getCookie('token');
  const config = {
  headers: {'authorization': token}
};
  const request = axios.get(`http://localhost:3005/api/user`, config);
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function addVehicle(vehicle, cb) {
  const token = getCookie('token');
  const config = {
  headers: {'authorization': token}
};
  const request = axios.post(`http://localhost:3005/api/vehicle`, vehicle, config).then( ()=> cb() );
  return {
    type: ADD_VEHICLE,
    payload: null
  }
}

export function deleteVehicle(id, cb) {
  const token = getCookie('token');
  console.log(id);
  const config = {
  headers: {'authorization': token}
};
  const request = axios.delete(`http://localhost:3005/api/vehicle/${id}`, config).then( () => cb() );
  console.log(id);

  return{
    type: DELETE_VEHICLE,
    payload: request
  }
}

export function updateUser(user, cb) {
  const token = getCookie('token');
  const config = {
  headers: {'authorization': token}
};
  const request = axios.put(`http://localhost:3005/api/user`, user, config).then( ()=> cb() );
  console.log(request);
  return {
    type: UPDATE_USER,
    payload: null
  }
}

export function registerUser(user) {
  const token = getCookie('token');
  const config = {
  headers: {'authorization': token}
};
  const request = axios.post(`http://localhost:3005/api/register`, user, config);
  return {
    type: ADD_USER,
    payload: null
  }
}


export function uploadFile(file, cb) {
    const token = getCookie('token');
    const config = {
    headers: {'authorization': token, 'content-type': 'multipart/form-data'}
  };
  const formData = new FormData();
  formData.append('invoice', file[0]);
  console.log(formData);
  const request = axios.post(`http://localhost:3005/api/file`, formData, config).then((data)=>{cb(data.data.data[0])});
  console.log(request);
  return {
    type: UPLOAD_FILE,
    payload: null
  }
}
