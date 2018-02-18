import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormElement = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const ItemForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0px 2px 2px #ccc;
`;

export const Text = styled.p`
  margin: 8px
`;

export const Button = styled(RaisedButton)`
  margin-top: 27px;
`;
