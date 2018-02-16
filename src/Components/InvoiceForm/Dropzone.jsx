import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropzoneContainer, DropzoneTitle, DropzoneStyled, DropzoneList } from './Dropzone_style';
import { uploadFile, uploadInvoice } from './../../Actions/Index';


export default class DropzoneComponent extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
    console.log(this.state.files);
    const filesI = {invoice: files }
    uploadFile(filesI);
  }

  render() {
    return (
      <DropzoneContainer>
        <DropzoneStyled onDrop={this.onDrop.bind(this)} name='invoice' multiple={true}>
          <DropzoneTitle>Dodaj Fakturę</DropzoneTitle>
        </DropzoneStyled>
        <DropzoneList>
          <h5>Dodane Pliki</h5>
          <div>
            {
              this.state.files.map(f => <i key={f.name}>{f.name}</i>)
            }
          </div>
        </DropzoneList>
      </DropzoneContainer>
    );
  }
}
