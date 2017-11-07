import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Radiuses from './Radiuses';
import Recorder from './Recorder';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

const Cover = styled.div`
  position: relative;
  background: ${p => p.theme.gradients.header};
  width: 100%;
  color: ${p => p.theme.colours.white};
`;

const Content = styled.div`
  z-index: 2;
`;

const Body = ({ children, renderHeader }) => (
  <Wrapper>
    <Cover>
      <Radiuses />
      <Container>
        <Recorder />
        <Content>{renderHeader()}</Content>
      </Container>
    </Cover>

    <Container>{children}</Container>
  </Wrapper>
);

export default Body;
