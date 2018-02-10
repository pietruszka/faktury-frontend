import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
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
`;

export const InputsContainer = styled.div`
  margin-left: 80px;
`;

export const TextInput = styled(TextField)`
  display: inline-block;
  margin-left: 20px;
`

export const Date = styled(DatePicker)`
  display: inline-block;
  margin-left: 20px;
`;

export const ComboBox = styled(SelectField)`
  display: inline-block;
  margin-left: 20px;
`;





