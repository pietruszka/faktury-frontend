// React
import React, { Component } from 'react';

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//Styled Components
import { ContentContainer, Button } from './Revenues_style';

// Components
import AddInvoice from './AddInvoice'


export default class Revenues extends Component {
  render() {
      return(
        <ContentContainer>
          <AddInvoice />
          <Button label="GENERUJ PDF" secondary={true}></Button>
          <Data />
        </ContentContainer>
      );
 }
} 

const Data = () => (
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Data Wystawienia</TableHeaderColumn>
        <TableHeaderColumn>Numer</TableHeaderColumn>
        <TableHeaderColumn>Kontrahent</TableHeaderColumn>
        <TableHeaderColumn>Opis</TableHeaderColumn>
        <TableHeaderColumn>Netto</TableHeaderColumn>
        <TableHeaderColumn>Brutto</TableHeaderColumn>
        <TableHeaderColumn><Button label="EDYTUJ" primary={true}></Button></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} >
      <TableRow>
        <TableRowColumn>22-01-2018</TableRowColumn>
        <TableRowColumn>000/000/003</TableRowColumn>
        <TableRowColumn>Janusz</TableRowColumn>
        <TableRowColumn>Węgiel</TableRowColumn>
        <TableRowColumn>100,00</TableRowColumn>
        <TableRowColumn>123,00</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

