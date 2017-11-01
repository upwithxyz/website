import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 15px;
  margin: ${p => p.theme.sizes.small} 0;
`;

const OuterBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 15px;
  background: rgba(181, 172, 172, 0.09);
`;

const InnerBar = styled.div`
  height: 100%;
  width: ${p => 100 * p.progress}%;
  background: ${p => p.theme.colours.rustRed};
`;

const ProgressBar = ({ progress = 0 }) => (
  <Wrapper>
    <OuterBar>
      <InnerBar progress={progress} />
    </OuterBar>
  </Wrapper>
);

export default ProgressBar;
