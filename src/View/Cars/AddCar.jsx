// React
import React, { Component } from 'react';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AddCarForm from './AddCar2/AddCar2';
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
import { Button, AddButton, Form, InputsContainer, TextInput, Date, ComboBox, Text } from './AddCar_style';


export class AddCar extends Component {
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
        width: '500px',
    };

    return (
      <div style={style}>
        <Button label="DODAJ POJAZD" primary={true} onClick={this.handleOpen} />
        <Dialog title="Dodaj nowy pojazd" actions={actions} modal={true} open={this.state.open} autoScrollBodyContent={true}>
          <AddCarForm user={this.props.user} />
        </Dialog>
      </div>
    );
  }
}
