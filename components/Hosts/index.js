import React from 'react';
import styled from 'styled-components';

import Host from './Host';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${p => p.theme.sizes.medium} 0;
`;

const Hosts = ({ hosts }) => (
  <Wrapper>
    {
      hosts.map((host, index) => <Host {...host} key={index }/>)
    }
  </Wrapper>
);

export default Hosts;
