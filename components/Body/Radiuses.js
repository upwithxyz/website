import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const range = (from = 0, to = 1) => fn => {
  const arr = new Array(to - from + 1);
  for (let i = from; i <= to; i++) {
    arr.push(fn(i));
  }
  return arr;
};

const Wrapper = styled.svg.attrs({
  viewBox: '0 0 1440 860',
  width: '100%',
  height: '100%'
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const breathe = (magnitude = 1.1) => keyframes`
  0% { transform: scale(1, 1) translate3d(0, 0, 0); }
  33% { transform: scale(${magnitude}, ${magnitude}) translate3d(1%, -1%, 0); }
  66% { transform: scale(1, 1) translate3d(-1%, 1%, 0); }
  100% { transform: scale(${magnitude}, ${magnitude}) translate3d(0, 0, 0); }
`;

const breatheSmall = breathe(1.06);
const breatheLarge = breathe(1.1);

const Circle = styled.circle.attrs({
  cx: 0,
  cy: 0,
  strokeWidth: 1,
  stroke: 'rgba(253, 242, 255, 0.11)',
  fill: 'none'
})`
  animation: ${p => (p.breatheSmall ? 8 : 10)}s ease-in-out
    ${p => p.breathePhase * (p.breatheSmall ? 8 : 10)}s infinite alternate
    ${p => (p.breatheSmall ? breatheSmall : breatheLarge)};
`;

Circle.defaultProps = {
  breathePhase: 0,
  breatheSmall: false
};

class Radiuses extends Component {
  shouldComponentUpdate() {
    return false; // since this is static artwork, updates aren't necessary
  }

  render() {
    return (
      <Wrapper>
        <g transform="translate(720, 430)">
          {range(1, 760 / 20)(i => (
            <Circle
              key={i}
              breathePhase={i % 2 === 0 ? 0 : 0.45}
              breatheSmall={i % 2 === 0}
              r={20 * i}
            />
          ))}
        </g>
      </Wrapper>
    );
  }
}

export default Radiuses;
