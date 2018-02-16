import styled from 'styled-components';
import Dropzone from 'react-dropzone';

export const DropzoneContainer = styled.div`
  display: Flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
`;

export const DropzoneTitle = styled.h1`
  text-align: center;
  margin: auto;
  font-weight: 300;
  font-size: 20px;
`;

export const DropzoneStyled = styled(Dropzone)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 40%;
  border: 1px dashed black;
  border-radius: 10px;
  margin-top: 20px;
`;

export const DropzoneList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-weight: 300;
`;
