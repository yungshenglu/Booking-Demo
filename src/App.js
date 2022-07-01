import React from 'react';
import { ThemeProvider } from '@emotion/react'

import RoomAllocationForm from '@/containers/RoomAllocationForm';
import {
  DEFAULT_MIN_GUEST,
  DEFAULT_MIN_ROOM,
} from '@/constants/RoomConstants';

import basicTheme from './theme/basicTheme';

const App = () => (
  <ThemeProvider theme={basicTheme}>
    <RoomAllocationForm
      guest={DEFAULT_MIN_GUEST}
      room={DEFAULT_MIN_ROOM}
      // onChange={handleChange}
    />
  </ThemeProvider>
);

export default App;
