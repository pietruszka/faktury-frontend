import React, { Fragment, Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { FormContainer, ItemContainer, FormElement, ItemForm, Text, Button } from './InvoiceForm_style';
import { connect } from 'react-redux';
import { addInvoice } from './../../Actions/Index';
import DropzoneComponent from './Dropzone';

const style = {
  margin: 12,
};
let isExpense = null;


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

    {fields.map((item, index) => (
      <ItemForm key={index}>

        <Text>L.p. {index + 1}</Text>
        <FormElement>
          <Field name={`${item}.name`} type="text" component={renderTextField} label="Nazwa/Opis" />
          <Field name={`${item}.quantity`} type="number" component={renderTextField} label="Ilość" />
          <Field name={`${item}.unit`} type="text" component={renderSelectField} label="Jednostka" >
              <MenuItem value="szt" primaryText="szt" />
              <MenuItem value="kg" primaryText="kg" />
          </Field>
        </FormElement>
        <FormElement>
          <Field name={`${item}.vat`} type="number" component={renderTextField} label="VAT %" />
          <Field name={`${item}.priceNet`} type="number" component={renderTextField} label="Netto" />
          <Button
            secondary={true}
            type="button"
            label="Usuń"
            onClick={() => fields.remove(index)}
          />
        </FormElement>
      </ItemForm>
    ))}
    <ItemContainer>
      <RaisedButton label="Add Item" primary={true} type="button" onClick={() => fields.push({})} />
      {submitFailed && error && <span>{error}</span>}
    </ItemContainer>
  </Fragment>
)

class InvoiceForm extends Component {
  componentWillMount() {
    const { invoice } = this.props.match.params;

    (['revenue', 'expense'].includes(invoice))
      ? this.isExpense = invoice === 'expense'
      : this.props.history.push('/invoices');
  }

  onSubmit = (values) => {
    const contractor = {
        "name": "Firma sp. z o.o.",
        "place": "ul. komandorska 147",
        "phone": "123456789",
        "nip": "1234567890",
        "postalCode": "43-546",
        "city": "Wroclaw"
    };
    if (this.isExpense) {
      values.type = "expense";
    } else {
      values.type = "income";
    }
    values.contractor = contractor;
    console.log(values);
    addInvoice(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <DropzoneComponent />

        <FormContainer>
          <FormElement>
            {/* <Field name="contractor.name" component={renderTextField} floatingLabelText="Kontrahent" /> */}

            <Field name="invoiceNumber" component={renderTextField} floatingLabelText="Numer Faktury" />

            <Field name="description" component={renderTextField} floatingLabelText="Opis" />
          </FormElement>

          <FormElement>
            <Field name="date.created" component={renderDatePicker} label="Data Wystawienia" />

            <Field name="date.sold" component={renderDatePicker} label="Data Sprzedaży" />
          </FormElement>

          <FormElement>
            <Field name="date.payment" component={renderDatePicker} label="Termin Płatności" />

            <Field name="paymentType" component={renderSelectField} floatingLabelText="Forma Płatności" >
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
