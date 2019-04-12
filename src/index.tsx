import * as  React from 'react';
import * as ReactDOM from 'react-dom';

import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  border-top: 5px outset #61dafb;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
`;

import Counter from './components/Counter';

ReactDOM.render(
<Div>
    <Counter />
</Div>,
    document.getElementById('root')
);
