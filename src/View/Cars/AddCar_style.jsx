import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export const ContentContainer = styled.div`
  margin: 10px;
`;

export const Button = styled(RaisedButton)`
  margin: 20px;
  display: inline;
`;

export const AddButton = styled(RaisedButton)`
  margin-top: 15px;
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputsContainer = styled.div`
  margin-left: 100px;
`;

export const TextInput = styled(TextField)`
  display: block;
`;

export const Text = styled.p`
  margin: 15px 0;
`;



