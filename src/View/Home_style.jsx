import styled from 'styled-components';

import {indigo700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

export const MainBar = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${indigo700};
`;

export const MenuButton = styled(RaisedButton)`
    margin: 12px 0 0 10px;
`;