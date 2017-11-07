import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const range = (from = 0, to = 1, step = 1) => fn => {
  const arr = new Array(Math.floor((to - from + 1) / step));
  for (let i = from; i <= to; i += step) {
    arr[i] = fn(i);
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
  33% { transform: scale(${magnitude}, ${magnitude}) translate3d(2px, -2px, 0); }
  66% { transform: scale(1, 1) translate3d(-2px, 2px, 0); }
  100% { transform: scale(${magnitude}, ${magnitude}) translate3d(0, 0, 0); }
`;

const breatheSmall = breathe(1.05);
const breatheLarge = breathe(1.09);

const Breathe = styled.g`
  transform: translate3d(0, 0, 0);
  transform-origin: center center;
  animation: ${p => (p.isSmall ? 10 : 12)}s ease-in-out ${p => p.phase * (p.isSmall ? 10 : 12)}s
    infinite alternate ${p => (p.isSmall ? breatheSmall : breatheLarge)};
`;

Breathe.defaultProps = {
  phase: 0,
  isSmall: false
};

const Circle = ({ r }) => (
  <circle r={r} cx={0} cy={0} strokeWidth={1} stroke="rgba(253, 242, 255, 0.11)" fill="none" />
);

class Radiuses extends Component {
  shouldComponentUpdate() {
    return false; // since this is static artwork, updates aren't necessary
  }

  renderCircle(i) {
    return <Circle key={i} r={20 * i} />;
  }

  render() {
    return (
      <Wrapper>
        <g transform="translate(720, 430)">
          <Breathe isSmall>{range(2, 760 / 20, 2)(this.renderCircle)}</Breathe>

          <Breathe phase={0.45}>{range(1, 760 / 20, 2)(this.renderCircle)}</Breathe>
        </g>
      </Wrapper>
    );
  }
}

export default Radiuses;
