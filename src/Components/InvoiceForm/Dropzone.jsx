import React, { Component } from 'react';
import { DropzoneContainer, DropzoneTitle, DropzoneStyled, DropzoneList } from './Dropzone_style';
import { uploadFile } from './../../Actions/Index';


export default class DropzoneComponent extends Component {


  onDrop(invoice) {
    console.log(invoice);
    uploadFile(invoice, (path) => {
      this.props.updateInvoiceFiles(path);
    });
  }

  render() {
    return (
      <DropzoneContainer>
        <DropzoneStyled onDrop={this.onDrop.bind(this)} name='invoice' inputProps={{encType: 'multipart/form-data', name: 'invoice'}}>
          <DropzoneTitle>Dodaj Fakturę</DropzoneTitle>
        </DropzoneStyled>
        <DropzoneList>
          <h5>Dodane Pliki</h5>
          <div>
            {
              this.props.invoice.map(f => <div key={f}>{f}</div>)
            }
          </div>
        </DropzoneList>



      </DropzoneContainer>
    );
  }
}
