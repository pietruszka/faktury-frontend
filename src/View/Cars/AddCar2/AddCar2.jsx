import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { addVehicle, fetchUser } from './../../../Actions/Index';
import { connect } from 'react-redux';
import { validate } from './../validateCar';

const style = {
  margin: 12,
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

class AddCar2 extends Component {
  onSubmit = (car) => {
    const vehicle = [...this.props.user[0].vehicle, car];
    const user = { ...this.props.user[0], vehicle };
    const userid = this.props.user[0].id;
    this.props.addVehicle(user, userid, () => this.props.fetchUser());
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="name" component={renderTextField} floatingLabelText="Opis/Nazwa" />

        <Field name="register_number" component={renderTextField} floatingLabelText="Numer rejestracyjny" />

        <Field name="owner" component={renderSelectField} label="Forma posiadania" >
          <MenuItem value="Własny" primaryText="Własny" />
          <MenuItem value="Leasing" primaryText="Leasing" />
          <MenuItem value="Kredyt" primaryText="Kredyt" />
        </Field>

        <Field name="deducted_costs" component={renderSelectField} label="Koszty do odliczenia" >
          <MenuItem value="0" primaryText="0%" />
          <MenuItem value="50" primaryText="50%" />
          <MenuItem type="number" value="100" primaryText="100%" />
        </Field>
        <div>
          <RaisedButton label="Dodaj" primary={true} type="submit" disabled={pristine || submitting} style={style} />
          <RaisedButton label="Wyczyść" secondary={true} style={style} disabled={pristine || submitting} onClick={reset} />
        </div>
      </form>
    )
	}
}

export default reduxForm({
  form: 'AddCarForm', // a unique identifier for this form
  validate
})(
  connect(null, { addVehicle, fetchUser })(AddCar2)
);