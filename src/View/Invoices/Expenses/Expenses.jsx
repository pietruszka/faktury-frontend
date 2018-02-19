import React, { Component, Fragment } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Button } from './Expenses_style'
import { fetchInvoices } from './../../../Actions/Index';
import DeleteDialog from './../../../Components/DeleteDialog';
import PdfDialog from './../../../Components/PdfDialog';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Expenses extends Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderTable = (invoice, i) => {
    if(!invoice.items || invoice.isExpense === false ) {
      return null;
    }
    console.log(invoice);
    return(
      <TableRow key={invoice._id}>
        <TableRowColumn>{invoice.date.created.substr(0, 10)}</TableRowColumn>
        <TableRowColumn>{invoice.invoiceNumber}</TableRowColumn>
        <TableRowColumn>{invoice.contractor.name}</TableRowColumn>
        <TableRowColumn>{invoice.net}</TableRowColumn>
        <TableRowColumn>{invoice.gross}</TableRowColumn>
        <TableRowColumn><DeleteDialog id={invoice._id}/></TableRowColumn>
        <TableRowColumn><PdfDialog invoiceInfo={invoice}/></TableRowColumn>
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
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Data Wystawienia</TableHeaderColumn>
                <TableHeaderColumn>Numer</TableHeaderColumn>
                <TableHeaderColumn>Kontrahent</TableHeaderColumn>
                <TableHeaderColumn>Netto</TableHeaderColumn>
                <TableHeaderColumn>Brutto</TableHeaderColumn>
                <TableHeaderColumn>Usuń</TableHeaderColumn>
                <TableHeaderColumn>Szczegóły</TableHeaderColumn>
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
 export default withRouter(connect(mapStateToProps, { fetchInvoices }) (Expenses));
