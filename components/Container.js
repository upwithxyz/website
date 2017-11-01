import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${p => p.theme.sizes.large} ${p => p.theme.sizes.gutter};
  width: ${p => p.theme.sizes.container};
  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default Container
