import React from 'react';
import Particles from './comps/Particles';

import Matrix from './comps/matrix/Matrix';
import { Box, Container } from '@mui/material';
import ProfileContainer from './comps/profile/ProfileContainer';
import Animation from './comps/Animation';
const App = () => {
  return (
    <Box>
      <Box>
        <Animation />
        <Particles />
        <Matrix />
      </Box>
      <Container>
        <ProfileContainer />
      </Container>
    </Box>
  );
};

export default App;
