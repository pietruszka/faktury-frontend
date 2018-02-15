import {  LOGIN_USER } from './../Actions/Index';
import { setCookie } from './../cookies';

export default function(state={}, action) {
  switch (action.type){
    case LOGIN_USER:
      console.log(action.payload.data.token);
      setCookie('token', `${action.payload.data.token}`);
    default:
      return state;
  }
}
