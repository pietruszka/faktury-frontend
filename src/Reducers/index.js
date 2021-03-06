import { combineReducers } from 'redux';
import InvoiceReducer from './invoices_reducer';
import UserReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  invoice: InvoiceReducer,
  user: UserReducer,
  form: formReducer,
});

export default rootReducer;
