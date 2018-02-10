import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { deleteInvoice, fetchInvoices } from './../Actions/Index';
import { connect } from 'react-redux';

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

  handleDelete = () => {
    this.setState({open: false});
    deleteInvoice(this.props.id, () => this.props.fetchInvoices())
  }

  render() {
    console.log(this.props);
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