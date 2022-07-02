import React from 'react';
import { ThemeProvider } from '@emotion/react'

import RoomAllocationForm from '@/containers/RoomAllocationForm';
import {
  INITIAL_GUEST,
  INITIAL_ROOM,
} from '@/constants/RoomConstants';

import basicTheme from './theme/basicTheme';

const App = () => (
  <ThemeProvider theme={basicTheme}>
    <RoomAllocationForm
      guest={INITIAL_GUEST}
      room={INITIAL_ROOM}
      // onChange={handleChange}
    />
  </ThemeProvider>
);

export default App;
