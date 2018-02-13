import React, { Fragment, Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { FormContainer, ItemContainer, FormElement, ItemForm } from './InvoiceForm_style';
import { connect } from 'react-redux';
import { addInvoice } from './../../Actions/Index';

const style = {
  margin: 12,
};
let isExpanse = null;


const renderDatePicker = ({ input, label }) =>
  <DatePicker
    floatingLabelText={label}
    onChange={(event, value) => input.onChange(value)}
  />

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

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




const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <Fragment>
    <ItemContainer>
      <RaisedButton label="Add Item" primary={true} type="button" onClick={() => fields.push({})} />
      {submitFailed && error && <span>{error}</span>}
    </ItemContainer>
    {fields.map((item, index) => (
      <ItemForm key={index}>

        <h4>Item #{index + 1}</h4>
        <FormElement>
          <Field name={`${item}.name`} type="text" component={renderTextField} label="name" />
          <Field name={`${item}.quantity`} type="number" component={renderTextField} label="ilość" />
          <Field name={`${item}.unit`} type="text" component={renderSelectField} label="jednostka" >
              <MenuItem value="szt" primaryText="szt" />
              <MenuItem value="kg" primaryText="kg" />
          </Field>
        </FormElement>
        <FormElement>
          <Field name={`${item}.vat`} type="number" component={renderTextField} label="VAT %" />
          <Field name={`${item}.priceNet`} type="number" component={renderTextField} label="Netto" />
          <RaisedButton
            secondary={true}
            type="button"
            label="Remove Item"
            onClick={() => fields.remove(index)}
          />
        </FormElement>
      </ItemForm>
    ))}
  </Fragment>
)

class InvoiceForm extends Component {
  componentWillMount() {
    const { invoice } = this.props.match.params;

    (['revenue', 'expanse'].includes(invoice))
      ? this.isExpanse = invoice === 'expanse'
      : this.props.history.push('/invoices');
  }

  onSubmit = (values) => {
    values.isExpanse = this.isExpanse;
    console.log(values);
    addInvoice(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <FormContainer>
          <FormElement>
            <Field name="contractor" component={renderTextField} floatingLabelText="Kontrahent" />

            <Field name="invoiceNumber" component={renderTextField} floatingLabelText="Numer Faktury" />

            <Field name="description" component={renderTextField} floatingLabelText="Opis" multiLine={true} rows={2} />
          </FormElement>


          <FormElement>
            <Field name="date.dateCreated" component={renderDatePicker} label="Data Wystawienia" />

            <Field name="date.dateSold" component={renderDatePicker} label="Data Sprzedaży" />
          </FormElement>

          <FormElement>
            <Field name="date.datePayment" component={renderDatePicker} label="Termin Płatności" />

            <Field name="payment_type" component={renderSelectField} floatingLabelText="Forma Płatności" >
              <MenuItem value="Gotówka" primaryText="Gotówka" />
              <MenuItem value="Przelew" primaryText="Przelew" />
            </Field>
          </FormElement>

        </FormContainer>

        <ItemContainer>
          <FieldArray name="items" component={renderItems} />
        </ItemContainer>


        <FormContainer>
          <RaisedButton label="Dodaj" primary={true} type="submit" disabled={pristine || submitting} style={style} />
          <RaisedButton label="Wyczyść" secondary={true} style={style} disabled={pristine || submitting} onClick={reset} />
        </FormContainer>
      </form>
    )
	}
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate
})(
  connect (null,{ addInvoice }) (InvoiceForm)
);
