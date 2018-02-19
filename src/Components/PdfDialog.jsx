import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { fetchInvoices, generatePdf } from './../Actions/Index';
import { connect } from 'react-redux';
import { Title, SubTitle, Container, Wrapper } from './PdfDialog_style';
import { URL } from './../Actions/Index';

class DeleteDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => this.setState({open: true});

  handleClose = () => this.setState({open: false});

  handleGeneratePdf = () => {
    this.setState({open: false});
  }

  render() {
    const PdfUrl = `${URL}/pdf/${this.props.invoiceInfo._id}`;
    console.log(this.props.invoiceInfo);
    const actions = [
      <FlatButton
        label="Anuluj"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Generuj PDF"
        secondary
        href={PdfUrl}
        target="_blank"
        keyboardFocused={true}
        onClick={this.handleGeneratePdf}
      />,
    ];

    const { contractor, date, invoiceNumber, description, net, gross, paymentType, files } = this.props.invoiceInfo;

    return (
      <div>
        <RaisedButton label="Szczegóły" primary onClick={this.handleOpen} />
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
              <SubTitle>Nazwa: {contractor.name}</SubTitle>
              <SubTitle>Miasto: {contractor.city}</SubTitle>
              <SubTitle>Kod Pocztowy: {contractor.postalCode}</SubTitle>
              <SubTitle>Numer Telefonu: {contractor.phone}</SubTitle>
              <SubTitle>NIP: {contractor.nip}</SubTitle>
            </Container>
            <Container>
              <Title>Informacje o Fakturze nr: </Title>
              <Title>{invoiceNumber} </Title>
              <SubTitle>Data Wystawienia: {date.created.substr(0, 10)}</SubTitle>
              <SubTitle>Data Sprzedaży: {date.sold.substr(0, 10)}</SubTitle>
              <SubTitle>Data Płatności: {date.payment.substr(0, 10)}</SubTitle>
              <SubTitle>Opis: {description}</SubTitle>
              <SubTitle>Netto: {net}</SubTitle>
              <SubTitle>Brutto: {gross}</SubTitle>
              <SubTitle>Rodzaj Płatności: {paymentType}</SubTitle>
              <SubTitle>Ilość plików: {files.length}</SubTitle>
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
