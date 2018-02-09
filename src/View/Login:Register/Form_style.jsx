import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


export const Container = styled.div`
  width: 350px;
  height: 300px;
  margin: 50px auto;
  text-align: center;
`;

export const Page = styled(Paper)`
  width: 100%;
  padding-bottom: 30px;
`;

export const Form = styled.form`
  margin-top: 10px;
  vertical-align: middle;
  text-align: center;
`;

export const Button = styled(RaisedButton)`
    margin-right: 10px;

`;

export const SubmitButton = styled(RaisedButton)`
  margin-top: 15px;
`;
