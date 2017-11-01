import React from 'react';
import styled from 'styled-components';

import IconButton from '../IconButton';
import Description from './Description';
import Labels from './Labels';
import ProgressBar from './ProgressBar';
import ProgressText from './ProgressText';
import Card from './Card';

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${p => p.theme.sizes.small} 0;
`;

const Player = () => (
  <Card>
    <TitleBar>
      <IconButton src="/static/icons/play.png" height={42} width={27} />

      <Description
        title="WTF is up with diversity"
        subtitle="feat. Jani Eväkallio & Oliver Turner"
      />

      <Labels edition="#001" />
    </TitleBar>

    <ProgressBar progress={0.3} />

    <ProgressText pos="1:35" length="5:67" />
  </Card>
);

export default Player;
