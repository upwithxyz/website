import React from 'react';
import styled from 'styled-components';
import { H5 } from '../Text';

const Wrapper = styled.div`
  margin-right: ${p => p.theme.sizes.large};
  line-height: 1.5;
`

const Avatar = styled.div`
  background-image: ${p => p.theme.gradients.avatar}, url('${p => p.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100px;
  height: 100px;
  margin-bottom: ${p => p.theme.sizes.small};

  ${p => p.theme.effects.glitchBox}
`;

const Host = ({ src, name }) => (
  <Wrapper>
    <Avatar src={src} />
    <H5>{name}</H5>
  </Wrapper>
);

export default Host;
