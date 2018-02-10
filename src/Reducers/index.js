import { combineReducers } from 'redux';
import InvoiceReducer from './invoices_reducer';

const rootReducer = combineReducers({
  invoice: InvoiceReducer,
});

export default rootReducer;
