import styled, { css } from 'styled-components';

const caps = p => p.caps ? css`
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: -0.1em;
` : undefined;

export const Text = styled.span`
  margin: 0;
  padding: 0;
`;

export const H1 = Text.withComponent('h1').extend`
  font-size: ${p => p.theme.fontSize(7)};
  font-weight: 900;
  color: ${p => p.red ? p.theme.colours.rustRed : 'inherit'};
  ${caps}
`;

export const H2 = Text.withComponent('h2').extend`
  font-size: ${p => p.theme.fontSize(5)};
  font-weight: ${p => p.bold ? 900 : 700};
  color: ${p => p.red ? p.theme.colours.rustRed : 'inherit'};
  ${caps}
`;

export const H3 = Text.withComponent('h3').extend`
  font-size: ${p => p.theme.fontSize(3)};
  font-weight: 500;
`;

export const H4 = Text.withComponent('h4').extend`
  font-size: ${p => p.theme.fontSize(2)};
  font-weight: 500;
`;

export const H5 = Text.withComponent('h5').extend`
  font-size: ${p => p.theme.fontSize(1)};
  font-weight: 500;
`;
