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
import { withRouter } from 'react-router';

const style = {
  margin: 12,
};


const renderDatePicker = ({ input, label }) =>
  <DatePicker
    floatingLabelText={label}
    onChange={(event, value) => input.onChange(value)}
  />

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
      <RaisedButton label="Dodaj towar lub usługę" primary={true} type="button" onClick={() => fields.push({})} />
      {submitFailed && error && <span>{error}</span>}
    </ItemContainer>
  </Fragment>
)

class InvoiceForm extends Component {
  constructor() {
    super();
    this.state = { invoice: [] };
  }

  componentWillMount() {
    const { invoice } = this.props.match.params;

    (['revenue', 'expense'].includes(invoice))
      ? this.isExpense = invoice === 'expense'
      : this.props.history.push('/invoices');
  }

  onSubmit = (values) => {
    if (this.isExpense) {
      values.type = "expense";
    } else {
      values.type = "income";
    }
    values.files = this.state.invoice;
    addInvoice(values, ()=> {
      this.props.history.push('/invoices');
    });
  }

  updateInvoiceFiles = (path) => {
    this.setState({
      invoice: [...this.state.invoice, path]
    }, ()=> console.log(this.state.invoice));
  }

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>

        <DropzoneComponent updateInvoiceFiles={this.updateInvoiceFiles} invoice={this.state.invoice} />
        <FormContainer>
          <FormElement>
            <h1>Kontrahent</h1>
            <Field name="contractor.name" component={renderTextField} floatingLabelText="Nazwa Kontrahenta" />
            <Field name="contractor.place" component={renderTextField} floatingLabelText="Adres Kontrahenta" />
            <Field name="contractor.phone" component={renderTextField} floatingLabelText="Numer Telefonu Kontrahenta" />
            <Field name="contractor.nip" component={renderTextField} floatingLabelText="NIP Kontrahenta" />
            <Field name="contractor.postalCode" component={renderTextField} floatingLabelText="Kod Pocztowy Kontrahenta" />
            <Field name="contractor.city" component={renderTextField} floatingLabelText="Miasto Kontrahenta" />

          </FormElement>

          <FormElement>
            <h1>Faktura</h1>
            <Field name="invoiceNumber" component={renderTextField} floatingLabelText="Numer Faktury" />

            <Field name="description" component={renderTextField} floatingLabelText="Opis" />

            <Field name="date.created" component={renderDatePicker} label="Data Wystawienia" />

            <Field name="date.sold" component={renderDatePicker} label="Data Sprzedaży" />
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
          <RaisedButton label="Zapisz" primary type="submit" disabled={pristine || submitting} style={style} />
          <RaisedButton label="Wyczyść" secondary style={style} disabled={pristine || submitting} onClick={reset} />
        </FormContainer>
      </form>
    );
  }
}
const InvoiceFormWithRouter = withRouter(InvoiceForm);

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate
})(
  connect(null,{ addInvoice })(InvoiceFormWithRouter)
);
