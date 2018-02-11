// React
import React, { Component } from 'react';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// Styled Components
import { Button, Form, InputsContainer, TextInput, Date, ComboBox } from './../View/Invoices/Revenues/Revenues_style';


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
        <Dialog title="Dodaj nową fakturę" actions={actions} modal={true} open={this.state.open} autoScrollBodyContent={true}>
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
      isExpense: this.props.isExpense,
      dateCreated: null,
      dateSold: null,
      paymentType: '',
      contractor: '',
      invoiceNumber: '',
      description: '',
      items: [],
      allowEdit: false,
    };

    this.handleChangeCombo = this.handleChangeCombo.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.editIcon = this.editIcon.bind(this);
  }

  handleChangeCombo(event, index, value) {
      this.setState({paymentType : value});
  }

  handleClickEdit() {
      if (this.state.allowEdit == false) {
        this.setState({allowEdit: true});
      } else {
        this.setState({allowEdit: false});
      }
  }

  editIcon() {
      return(<i class="material-icons">clear</i>);
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    console.log(this);
    return(
        <Form onSubmit={this.handleSubmit}>
            <InputsContainer>
            <TextInput floatingLabelText="Kontrahent" value={this.state.contractor}/>
            <TextInput floatingLabelText="Numer faktury" />
            <Date floatingLabelText="Data wystawienia" />
            <Date floatingLabelText="Data sprzedaży" />
            <Date floatingLabelText="Termin płatności" />
            <TextInput floatingLabelText="Opis" />
            <ComboBox floatingLabelText="Forma płatności" value={this.state.paymentType} onChange={this.handleChangeCombo}>
              <MenuItem value={"Gotówka"} primaryText="Gotówka" />
              <MenuItem value={"Przelew"} primaryText="Przelew" />
              <MenuItem value={"Karta"} primaryText="Karta" />
            </ComboBox> <br />
            </InputsContainer>
            <Button type="submit" label="Dodaj" primary={true} />
          </Form>
    );
  }
}

export default AddInvoice;
