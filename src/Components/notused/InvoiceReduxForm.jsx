import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { addInvoice, fetchInvoices } from './../Actions/Index';
import { connect } from 'react-redux';


const validate = values => {
  console.log(values);
  const errors = {}
  const requiredFields = [
    'contractor',
    'invoiceNumber',
    'payment_type',
    'dateCreated',
    'dateSold',
    'datePayment',
    'description'
  ]
  requiredFields.forEach(field => {
  if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

const style = {
  margin: 12,
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />

const renderDatePicker = ({ input, label }) =>
  <DatePicker
    floatingLabelText={label}
    onChange={(event, value) => input.onChange(value)}
  />

const renderCheckbox = ({ input, label }) =>
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />

const renderRadioGroup = ({ input, ...rest }) =>
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) =>
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />

  const onSubmit = (values) => {
    console.log(values);
    addInvoice(values);
  }

const InvoiceReduxForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit.bind(this))}>

        <Field name="contractor" component={renderTextField} floatingLabelText="Kontrahent"v/>

        <Field name="invoiceNumber" component={renderTextField} floatingLabelText="Numer Faktury" />

        <Field name="dateCreated" component={renderDatePicker} label="Data Wystawienia" />

        <Field name="dateSold" component={renderDatePicker} label="Data Sprzedaży" />

        <Field name="datePayment" component={renderDatePicker} label="Termin Płatności" />

        <Field name="payment_type" component={renderSelectField} floatingLabelText="Forma Płatności" >
          <MenuItem value="Gotówka" primaryText="Gotówka" />
          <MenuItem value="Przelew" primaryText="Przelew" />
          <MenuItem value="Karta" primaryText="Karta" />
        </Field>

        <Field name="description" component={renderTextField} floatingLabelText="Opis" multiLine={true} rows={2} />

      <div>
        <RaisedButton label="Dodaj" primary={true} type="submit" disabled={pristine || submitting} style={style}/>
        <RaisedButton label="Wyczyść" secondary={true} style={style} disabled={pristine || submitting} onClick={reset}/>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'InvoiceReduxForm', // a unique identifier for this form
  validate,
})(
  connect (null,{ addInvoice }) (InvoiceReduxForm)
);
