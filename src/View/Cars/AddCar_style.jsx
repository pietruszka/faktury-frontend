import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


export const ContentContainer = styled.div`
  margin: 10px;
`;

export const Button = styled(RaisedButton)`
  margin: 10px;
  display: inline;
`;

export const Form = styled.form`
  margin-top: 10px;
  height: 500px;
  text-align: center;
`;

export const InputsContainer = styled.div`
  
`;

export const TextInput = styled(TextField)`
  display: block;
  margin-left: 20px;
`

export const ComboBox = styled(SelectField)`
  display: block;
  margin-left: 20px;
`;





