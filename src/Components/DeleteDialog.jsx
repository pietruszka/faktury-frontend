import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { deleteInvoice, fetchInvoices } from './../Actions/Index';
import { connect } from 'react-redux';


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

  handleDelete = () => {
    this.setState({open: false});
    deleteInvoice(this.props.id, () => this.props.fetchInvoices())
  }

  render() {
    const actions = [
      <FlatButton
        label="Anuluj"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Usuń"
        secondary={true}
        keyboardFocused={true}
        onClick={this.handleDelete}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Usuń" secondary={true} onClick={this.handleOpen} />
        <Dialog
          title="Usuń fakturę"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        Czy napewno chcesz usunąć fakture o numerze: {this.props.id} ?
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { invoice: state.invoice };
}
 export default connect(mapStateToProps, { fetchInvoices }) (DeleteDialog);
