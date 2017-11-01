import React from 'react';
import page from '../hoc/page';
import Header from '../components/Header';
import Hosts from '../components/Hosts';
import { H1, H2, H4 } from '../components/Text';

const Wtf = H1.extend.attrs({
  caps: true,
  red: true,
  children: 'Wtf'
})`
  position: relative;
  margin-left: -0.1em;

  &:before {
    position: absolute;
    left: -40px;
    top: 50%;
    margin-top: -17px;
    width: 35px;
    height: 35px;

    background-color: ${p => p.theme.colours.rustRed};
    border-radius: 50%;
    content: ' ';
  }
`;

const IsUpWith = H2.extend.attrs({
  children: 'is up with'
})`
  ${p => p.theme.effects.glitchText}
`;

const Xyz = H2.extend.attrs({
  red: true,
  bold: true,
  caps: true,
  children: 'Xyz'
})`
  margin-top: 0.1em;
`;

const Description = H4.extend`
  padding-top: ${p => p.theme.sizes.medium};
  padding-bottom: ${p => p.theme.sizes.large};
  width: 80%;
`;

const Index = () => (
  <Header>
    <Wtf />
    <IsUpWith />
    <Xyz />

    <Description>
      Biweekly Podcast about JavaScript, Tech, and the World... I guess
    </Description>

    <Hosts hosts={[
      { src: '/static/hosts/phil.jpg', name: 'Phil' },
      { src: '/static/hosts/sara.jpg', name: 'Sara' },
      { src: '/static/hosts/anup.jpg', name: 'Anup' }
    ]} />
  </Header>
);

export default page(Index);
