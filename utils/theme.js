import { css } from 'styled-components';
import { rem } from 'polished';

const fontSizeScale = [
  1,
  rem(24, 18),
  rem(36, 18),
  rem(48, 18),
  rem(64, 18),
  rem(72, 18),
  rem(96, 18),
  rem(144, 18)
];

export const fontSize = steps => {
  if (steps < 0) {
    return Math.round(Math.pow(4 / 3, steps));
  } else if (steps >= fontSizeScale.length) {
    return Math.round(
      fontSizeScale[fontSizeScale.length - 1] * Math.pow(4 / 3, steps)
    );
  }

  return fontSizeScale[steps];
};

export const sizes = {
  container: '1100px',
  gutter: '75px',
  small: '10px',
  medium: '36px',
  large: '58px'
};

export const colours = {
  white: '#fff',
  rustRed: '#dd6868',
  nightBlue: '#322c3f'
};

export const gradients = {
  header: `linear-gradient(0deg, #27232f, ${colours.nightBlue} 45%)`,
  avatar: `linear-gradient(0deg, rgba(105, 15, 86, 0.5), rgba(255, 255, 255, 0) 70%)`
};

export const effects = {
  glitchText: css`
    text-shadow:
      3px 3px 0 rgba(246, 155, 57, 0.21),
      -3px -2px 0 rgba(250, 255, 153, 0.25);
    transform: translate3d(0, 0, 0);
  `,
  glitchBox: css`
    box-shadow:
      3px 3px 0 rgba(246, 155, 57, 0.21),
      -2px -2px 0 rgba(250, 255, 153, 0.25);
    transform: translate3d(0, 0, 0);
  `
};
