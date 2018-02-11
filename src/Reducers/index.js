import { combineReducers } from 'redux';
import InvoiceReducer from './invoices_reducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  invoice: InvoiceReducer,
  form: formReducer
});

export default rootReducer;
