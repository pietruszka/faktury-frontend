import React, { Component, Fragment } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { ContentContainer, StyledRaisedButton } from './Expenses_style'
import RaisedButton from 'material-ui/RaisedButton';
import { fetchInvoices } from './../../../Actions/Index';
import DeleteDialog from './../../../Components/DeleteDialog';
import { connect } from 'react-redux';

class Expenses extends Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderTable = (invoice, i) => {
    const netto = invoice.items.map((item)=>{
      return item.net
    });

    const brutto = invoice.items.map((item)=>{
      return item.net + item.vat
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
          <StyledRaisedButton label="Dodaj Wydatek" primary={true} />
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
  );
 }
}
function mapStateToProps(state) {
  return { invoice: state.invoice };
}
 export default connect(mapStateToProps, { fetchInvoices }) (Expenses);
