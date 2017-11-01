import React from 'react';
import styled from 'styled-components';

import { H5 } from '../Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${p => p.theme.sizes.small} 0;
`;

const ProgressText = ({ pos, length }) => (
  <Wrapper>
    <H5>{pos}</H5>
    <H5>{length}</H5>
  </Wrapper>
);

export default ProgressText;
