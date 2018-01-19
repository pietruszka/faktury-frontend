import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { colors, typography } from '../../utils/styles';


export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Body = styled(Scrollbars)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;
