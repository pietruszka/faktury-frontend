// React
import React, { Component } from 'react';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';

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
import { Button, Form, InputsContainer, TextInput, Date, ComboBox } from './Revenues_style';


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
      paymentType: '',
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
      this.setState({allowEdit: true});
      console.log(2);
  }
    
  editIcon() {
      return(<SvgIcon> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>);
  }
     
  render() {
    return(
      <div>
        <Form>
            <InputsContainer>
            <TextInput floatingLabelText="Kontrahent" />
            <TextInput floatingLabelText="Numer faktury" />
            <Date floatingLabelText="Data wystawienia" />
            <Date floatingLabelText="Data sprzedaży" />
            <Date floatingLabelText="Termin płatności" />
            <TextInput floatingLabelText="Opis" />
            <ComboBox floatingLabelText="Forma płatności" value={this.state.paymentType} onChange={this.handleChangeCombo}>
              <MenuItem value={1} primaryText="Gotówka" />
              <MenuItem value={2} primaryText="Przelew" />
              <MenuItem value={3} primaryText="Karta" />
            </ComboBox> <br />
            </InputsContainer>
            <Table>
              <TableHeader displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>Nazwa</TableHeaderColumn>
                  <TableHeaderColumn>Cena</TableHeaderColumn>
                  <TableHeaderColumn>Ilość</TableHeaderColumn>
                  <TableHeaderColumn>j.m.</TableHeaderColumn>
                  <TableHeaderColumn>Netto</TableHeaderColumn>
                  <TableHeaderColumn>Stawka VAT</TableHeaderColumn>
                  <TableHeaderColumn>Wartość VAT</TableHeaderColumn>
                  <TableHeaderColumn>Brutto</TableHeaderColumn>
                  <TableHeaderColumn><Button label="EDYTUJ" primary={true} onClick={this.handleClickEdit}></Button></TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} >
                <TableRow>
                  <TableRowColumn>Krzesło</TableRowColumn>
                  <TableRowColumn>100,00</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>szt.</TableRowColumn>
                  <TableRowColumn>100,00</TableRowColumn>
                  <TableRowColumn>23%</TableRowColumn>
                  <TableRowColumn>23</TableRowColumn>
                  <TableRowColumn>123</TableRowColumn>
                  <TableRowColumn>{ this.state.allowEdit ? this.editIcon() : null }</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <Button type="submit" label="Dodaj" primary={true} />
          </Form>
      </div>
    );
  }
}

export default AddInvoice;