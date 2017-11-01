import React from 'react';
import styled from 'styled-components';

import Container from '../Container';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

const Cover = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url('/static/brand/radiuses.svg'), ${p => p.theme.gradients.header};
  background-repeat: no-repeat;
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
`;

const Body = ({ children, renderHeader }) => (
  <Wrapper>
    <Cover>
      <Container>
        <Recorder />
        {renderHeader()}
      </Container>
    </Cover>

    <Container>{children}</Container>
  </Wrapper>
);

export default Body;
