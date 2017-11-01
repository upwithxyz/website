import React from 'react';
import styled from 'styled-components';

import { H4, H5 } from '../Text';

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 0 ${p => p.theme.sizes.medium};
`;

const Subtitle = H5.extend`
  padding-left: 0.1em;
`;

const Description = ({ title, subtitle }) => (
  <Wrapper>
    <H4>{title}</H4>
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
);

export default Description;
