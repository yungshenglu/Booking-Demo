import React from 'react';
import { ThemeProvider } from '@emotion/react'

import CustomInputNumber from '@C/CustomInputNumber';
import basicTheme from './theme/basicTheme';

const App = () => (
  <ThemeProvider theme={basicTheme}>
    <CustomInputNumber
      name="demo"
      min={0}
      max={99}
      step={1}
    />
  </ThemeProvider>
);

export default App;
