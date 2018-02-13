// React
import React, { Component, Fragment } from 'react';

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import { ContentContainer, Button } from './Revenues_style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchInvoices } from './../../../Actions/Index';
import DeleteDialog from './../../../Components/DeleteDialog';




class Revenues extends Component {

  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderTable = (invoice, i) => {
    if(!invoice.items || invoice.isExpanse === true) {
      return null;
    }
    const netto = invoice.items.map((item)=>{
      return item.priceNet * item.quantity
    });

    const brutto = invoice.items.map((item)=>{
      return item.priceNet * item.quantity * (1 + (item.vat/100))
    });

    const add = (a, b) => a + b;
    const bruttoSum = brutto.reduce(add);
    const nettoSum = netto.reduce(add);

    return(
      <TableRow key={invoice.id}>
        <TableRowColumn>{invoice.dateCreated}</TableRowColumn>
        <TableRowColumn>{invoice.id}</TableRowColumn>
        <TableRowColumn>{invoice.contractor}</TableRowColumn>
        <TableRowColumn>{invoice.description}</TableRowColumn>
        <TableRowColumn>{nettoSum}</TableRowColumn>
        <TableRowColumn>{bruttoSum}</TableRowColumn>
        <TableRowColumn><DeleteDialog id={invoice.id}/></TableRowColumn>
      </TableRow>
    );
  }

  render() {
    console.log(this.props.invoice);
    if (!this.props.invoice){
      return <div>Loading...</div>;
    }
      return(
        <Fragment>
          <Link to='/add/revenue'><RaisedButton label="Dodaj Fakturę" primary={true} /></Link>
          <Table>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Data Wystawienia</TableHeaderColumn>
                <TableHeaderColumn>Numer</TableHeaderColumn>
                <TableHeaderColumn>Kontrahent</TableHeaderColumn>
                <TableHeaderColumn>Opis</TableHeaderColumn>
                <TableHeaderColumn>Netto</TableHeaderColumn>
                <TableHeaderColumn>Brutto</TableHeaderColumn>
                <TableHeaderColumn>Usuń</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.props.invoice.map(this.renderTable)}
            </TableBody>
          </Table>
        </Fragment>
      )
    }
}

function mapStateToProps(state) {
  return { invoice: state.invoice };
}
 export default connect(mapStateToProps, { fetchInvoices }) (Revenues);
