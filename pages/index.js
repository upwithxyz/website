import React from 'react';

import page from '../hoc/page';
import Body from '../components/Body';
import Header from '../components/Header';
import Player from '../components/Player';

const Index = () => (
  <Body renderHeader={Header}>
    <Player />
  </Body>
);

export default page(Index);
