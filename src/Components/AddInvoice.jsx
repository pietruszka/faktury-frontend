// React
import React, { Component } from 'react';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import AddForm from './AddForm';

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


class AddInvoiceComp extends Component {
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



export default AddInvoiceComp;
