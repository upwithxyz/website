import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';

import { fontFace } from '../utils/fontFace';
import * as theme from '../utils/theme';

injectGlobal`
  ${normalize()}
  ${fontFace}

  html, body {
    font-family: 'Inter UI', 'San Francisco', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    background: #fafafa;
    color: ${theme.colours.nightBlue};
  }

  * {
    box-sizing: border-box;
  }
`;

const page = WrappedComponent => {
  const WithPage = () => (
    <ThemeProvider theme={theme}>
      <WrappedComponent />
    </ThemeProvider>
  );

  WithPage.displayName = `WithPage(${WrappedComponent.displayName || WrappedComponent.name || ''})`;

  return WithPage;
};

export default page;
