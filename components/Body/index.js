import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Radiuses from './Radiuses';

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

const Recorder = styled.div`
  position: absolute;
  top: ${p => p.theme.sizes.large};
  right: ${p => p.theme.sizes.gutter};
  bottom: 0;
  width: 40%;

  background-image: url('/static/brand/recorder.svg');
  background-position: 100% 0%;
  background-size: cover;
  background-repeat: no-repeat;

  z-index: 1;
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
