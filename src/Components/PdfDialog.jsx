import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { fetchInvoices, generatePdf } from './../Actions/Index';
import { connect } from 'react-redux';
import { Title, SubTitle, Container, Wrapper } from './PdfDialog_style';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class DeleteDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleGeneratePdf = () => {
    this.setState({open: false});
    generatePdf(this.props.invoiceInfo._id, () => this.props.fetchInvoices())
  }

  render() {
    console.log(this.props.invoiceInfo);
    const actions = [
      <FlatButton
        label="Anuluj"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Generuj PDF"
        secondary={true}
        keyboardFocused={true}
        onClick={this.handleGeneratePdf}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Szczegóły" primary={true} onClick={this.handleOpen} />
        <Dialog
          title="Szczegóły faktury"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Wrapper>
            <Container>
              <Title>Informacje o Kontrahencie: </Title>
              <SubTitle>Nazwa: {this.props.invoiceInfo.contractor.name}</SubTitle>
              <SubTitle>Miasto: {this.props.invoiceInfo.contractor.city}</SubTitle>
              <SubTitle>Kod Pocztowy: {this.props.invoiceInfo.contractor.postalCode}</SubTitle>
              <SubTitle>Numer Telefonu: {this.props.invoiceInfo.contractor.phone}</SubTitle>
              <SubTitle>NIP: {this.props.invoiceInfo.contractor.nip}</SubTitle>
            </Container>
            <Container>
              <Title>Informacje o Fakturze nr: </Title>
              <Title>{this.props.invoiceInfo.invoiceNumber} </Title>
              <SubTitle>Data Wystawienia: {this.props.invoiceInfo.date.created.substr(0, 10)}</SubTitle>
              <SubTitle>Data Sprzedaży: {this.props.invoiceInfo.date.sold.substr(0, 10)}</SubTitle>
              <SubTitle>Data Płatności: {this.props.invoiceInfo.date.payment.substr(0, 10)}</SubTitle>
              <SubTitle>Opis: {this.props.invoiceInfo.description}</SubTitle>
              <SubTitle>Netto: {this.props.invoiceInfo.net}</SubTitle>
              <SubTitle>Brutto: {this.props.invoiceInfo.gross}</SubTitle>
              <SubTitle>Rodzaj Płatności: {this.props.invoiceInfo.paymentType}</SubTitle>
              <SubTitle>Ilość plików: {this.props.invoiceInfo.files.length}</SubTitle>
            </Container>
          </Wrapper>

        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { invoice: state.invoice };
}
 export default connect(mapStateToProps, { fetchInvoices }) (DeleteDialog);
