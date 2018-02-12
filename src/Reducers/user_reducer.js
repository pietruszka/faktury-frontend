import { FETCH_USER } from './../Actions/Index';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
}
