import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { Button, Form } from './Revenues_style';


class AddInvoice extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      open: false,
    };
    
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Anuluj"
        primary={true}
        onClick={this.handleClose}
      />,
      
    ];
    
    const style = {
        display: 'inline',
    };

    return (
      <div style={style}>
        <Button label="WYSTAW NOWĄ FAKTURĘ" primary={true} onClick={this.handleOpen} />
        <Dialog title="Dodaj nową fakturę" actions={actions} modal={true} open={this.state.open}>
          <AddForm />
        </Dialog>
      </div>
    );
  }
}

class AddForm extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      paymentType: '',
    };
    
    this.handleChangeCombo = this.handleChangeCombo.bind(this);
  }
  
  handleChangeCombo(event, index, value) { 
      this.setState({paymentType : value});
  }
     
  render() {
    return(
      <Form>
        <TextField floatingLabelText="Kontrahent" /> <br />
        <TextField floatingLabelText="Numer faktury" />
        <DatePicker hintText="Data wystawienia" />
        <DatePicker hintText="Data sprzedaży" />
        <DatePicker hintText="Termin płatności" />
        <SelectField floatingLabelText="Forma płatności" value={this.state.paymentType} onChange={this.handleChangeCombo}>
          <MenuItem value={1} primaryText="Gotówka" />
          <MenuItem value={2} primaryText="Przelew" />
          <MenuItem value={3} primaryText="Karta" />
        </SelectField> <br />
        <TextField hintText="Opis" /> <br />
        <Button type="submit" label="Dodaj" primary={true} />
      </Form>
    );
  }
}

export default AddInvoice;