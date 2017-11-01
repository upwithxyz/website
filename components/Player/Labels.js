import React from 'react';
import styled from 'styled-components';

import { H4, H5 } from '../Text';
import IconButton from '../IconButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  text-align: right;
  padding-left: ${p => p.theme.sizes.medium};
`;

const Labels = ({ edition }) => (
  <Wrapper>
    <H4>{edition}</H4>
    <IconButton src="/static/icons/download.png" height={31} width={30} />
  </Wrapper>
);

export default Labels;
