import { FETCH_INVOICES, DELETE_INVOICE } from './../Actions/Index';
import _ from 'lodash';

export default function(state=[], action) {
  switch (action.type){
    case FETCH_INVOICES:
      // return _.mapKeys(action.payload.data, 'id')
      return action.payload.data;
      case DELETE_INVOICE:
        return _.omit(state, action.payload);
    default:
      return state;
  }
}
