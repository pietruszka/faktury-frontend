// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form'

// Material-UI
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

// Styled Components
import { Container, Page, Button } from './Main_style'



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
    disabled={this.disabledEdit}
    {...input}
    {...custom}
  />

class SettingsMain1 extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
        data: {
          name: '',
          nip: '',
          regon: '',
          street: '',
          adress1: '',
          adress2: '',
          code: '',
          city: '',
      },
      disabledEdit: true,
      showSaveButton: false,
    });
  }
  componentWillMount(){

  }

  handleClickEdit = () => this.setState({ disabledEdit: false, showSaveButton: true });

  handleClickSave = () => this.setState({ showSaveButton: false, disabledEdit: true });

  saveButton = () => <Button label="ZAPISZ" secondary={true} onClick={this.handleClickSave} />;

  render() {
    console.log(this);
    const { disabledEdit, showSaveButton } = this;

    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Ustawienia" showMenuIconButton={false} zDepth={0} /> <br/>
            <Field name="name" component={renderTextField} label='Nazwa Firmy' disabled={disabledEdit}/>
            <Field name="nip" component={renderTextField} label='NIP' />
            <Field name="regon" component={renderTextField} label='Regon' />
            <Field name="street" component={renderTextField} label='Ulica' />
            <Field name="buildingNumber" component={renderTextField} label='Numer budynku' />
            <Field name="flatNumber" component={renderTextField} label='Numer lokalu' />
            <Field name="city" component={renderTextField} label='Miasto' />
            <Field name="postalCode" component={renderTextField} label='Kod pocztowy' />

            <Button label="EDYTJ" primary={true} onClick={this.handleClickEdit} />
            { showSaveButton && this.saveButton() }
          </Page>
        </Container>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SettingsMain1'
}) (SettingsMain1);
