import React from 'react';
import Particles from './comps/Particles';
import Matrix from './comps/matrix/Matrix';
import ProfileContainer from './comps/profile/ProfileContainer';
import Animation from './comps/animation/Animation';
import { Box, Container } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Animation />
      <Matrix />
      <Particles />
      <Box sx={{ position: 'relative', paddingTop: '850px' }}>
        <Container>
          <ProfileContainer />
        </Container>
      </Box>
    </Box>
  );
};

export default App;
