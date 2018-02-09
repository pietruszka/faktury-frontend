import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { Button } from './Revenues_style';


class NewInvoice extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      open: false,
    };
    
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Anulij"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Dodaj"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    
    const style = {
        display: 'inline',
    };

    return (
      <div style={style}>
        <Button label="WYSTAW NOWĄ FAKTURĘ" primary={true} onClick={this.handleOpen} />
        <Dialog
          title="Dodaj nową fakturę"
          actions={actions}
          modal={true}
          open={this.state.open}>
          ...
        </Dialog>
      </div>
    );
  }
}

export default NewInvoice;