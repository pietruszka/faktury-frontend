import React, { Component } from 'react';

import { ContentContainer, Button } from './Revenues_style';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class Revenues extends Component {
  render() {
      return(
        <ContentContainer>
          <Button label="WYSTAW NOWĄ FAKTURĘ" primary={true}></Button>
          <Button label="EDYTUJ" primary={true}></Button>
          <Button label="GENERUJ PDF" secondary={true}></Button>
            <TableExampleSimple/>
        </ContentContainer>
      );
 }
} 

const TableExampleSimple = () => (
  <Table>
    <TableHeader displayHeaderCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);