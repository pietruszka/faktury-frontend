import { FETCH_INVOICES } from './../Actions/Index';
import _ from 'lodash';

export default function(state=[], action) {
  switch (action.type){
    case FETCH_INVOICES:
      // return _.mapKeys(action.payload.data, 'id')
      return action.payload.data;
    default:
      return state;
  }
}
