import React, { Component, Fragment } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { ContentContainer, Button } from './Expenses_style'
import RaisedButton from 'material-ui/RaisedButton';
import { fetchInvoices } from './../../../Actions/Index';
import DeleteDialog from './../../../Components/DeleteDialog';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Expenses extends Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderTable = (invoice, i) => {
    if(!invoice.items || invoice.isExpense === false ) {
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
      <TableRow key={invoice._id}>
        <TableRowColumn>{invoice.date.created}</TableRowColumn>
        <TableRowColumn>{invoice.invoiceNumber}</TableRowColumn>
        <TableRowColumn>{invoice.contractor.name}</TableRowColumn>
        <TableRowColumn>{invoice.description}</TableRowColumn>
        <TableRowColumn>{nettoSum}</TableRowColumn>
        <TableRowColumn>{bruttoSum}</TableRowColumn>
        <TableRowColumn><DeleteDialog id={invoice._id}/></TableRowColumn>
      </TableRow>
    );
  }


  render() {
    if (!this.props.invoice.data){
      return <div>Loading...</div>;
    }
      return(
        <Fragment>
          <Link to='/add/expense'><Button label="Dodaj Fakturę" primary={true} /></Link>
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
              {this.props.invoice.data.map(this.renderTable)}
            </TableBody>
          </Table>
        </Fragment>
  );
 }
}
function mapStateToProps(state) {
  return { invoice: state.invoice };
}
 export default connect(mapStateToProps, { fetchInvoices }) (Expenses);
