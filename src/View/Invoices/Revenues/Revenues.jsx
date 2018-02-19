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

import { Button } from './Revenues_style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchInvoices } from './../../../Actions/Index';
import DeleteDialog from './../../../Components/DeleteDialog';
import PdfDialog from './../../../Components/PdfDialog';

class Revenues extends Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderTable = (invoice) => {
    if (!invoice.items || invoice.isExpense === true) {
      return null;
    }

    return (
      <TableRow key={invoice._id} >
        <TableRowColumn>{invoice.date.created.substr(0, 10)}</TableRowColumn>
        <TableRowColumn>{invoice.invoiceNumber}</TableRowColumn>
        <TableRowColumn>{invoice.contractor.name}</TableRowColumn>
        <TableRowColumn>{invoice.net}</TableRowColumn>
        <TableRowColumn>{invoice.gross}</TableRowColumn>
        <TableRowColumn><DeleteDialog id={invoice._id} /></TableRowColumn>
        <TableRowColumn><PdfDialog invoiceInfo={invoice} /></TableRowColumn>
      </TableRow>
    );
  }

  render() {
    console.log(this.props);
    if (!this.props.invoice.data) {
      return <div>Loading...</div>;
    }
    return (
        <Fragment>
          <Link to='/add/revenue'><Button label="Dodaj Fakturę" primary /></Link>
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
    )
  }
}

function mapStateToProps(state) {
  return { invoice: state.invoice };
}
 export default connect(mapStateToProps, { fetchInvoices })(Revenues);
