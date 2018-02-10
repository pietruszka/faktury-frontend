// React
import React, { Component } from 'react';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

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
import { Button, Form, InputsContainer, TextInput, Date, ComboBox } from './AddCar_style';


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
        display: 'inline',
    };

    return (
      <div style={style}>
        <Button label="DODAJ POJAZD" primary={true} onClick={this.handleOpen} />
        <Dialog title="Dodaj nowy pojazd" actions={actions} modal={true} open={this.state.open} autoScrollBodyContent={true}>
          <AddData />
        </Dialog>
      </div>
    );
  }
}

class AddData extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      ownership: '',
      type: '',
      allowEdit: false,
    };
    
    this.handleChangeCombo1 = this.handleChangeCombo1.bind(this);
    this.handleChangeCombo2 = this.handleChangeCombo2.bind(this);
  }
  
  handleChangeCombo1(event, index, value) { 
      this.setState({ownership : value});
  }

  handleChangeCombo2(event, index, value) { 
      this.setState({type : value});
  }
     
  render() {
    return(
      <div>
        <Form>
            <InputsContainer>
              <TextInput floatingLabelText="Opis/Nazwa" /> <br/>
              <TextInput floatingLabelText="Numer rejestracyjny" /> <br/>
              <ComboBox floatingLabelText="Forma posiadania" value={this.state.ownership} onChange={this.handleChangeCombo1}>
                <MenuItem value={1} primaryText="Leasing" />
                <MenuItem value={2} primaryText="Własny" />
              </ComboBox> <br/>
              <ComboBox floatingLabelText="Typ" value={this.state.type} onChange={this.handleChangeCombo2}>
                <MenuItem value={1} primaryText="Osobowy" />
                <MenuItem value={2} primaryText="Bus" />
                <MenuItem value={3} primaryText="Ciężarowy" />
              </ComboBox> <br/>
              <p>% Kosztow do odliczenia</p>
              <RadioButtonGroup name="Koszty do odlicznia" defaultSelected="0">
                <RadioButton value="0" label="0%" />
                <RadioButton value="50" label="50%" />
                <RadioButton value="100" label="100%" />
              </RadioButtonGroup>
            </InputsContainer>
            <Button type="submit" label="Dodaj" primary={true} />
          </Form>
      </div>
    );
  }
}
