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

      <Box
        sx={{
          position: 'relative',
          marginTop: {
            xs: '1000px',
            sm: '1100px',
            md: '1150px',
          },
        }}>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: {
              xs: '-8%',
              sm: '-15%',
            },
          }}
          className='arrow'></Box>
        <Container>
          <ProfileContainer />
        </Container>
      </Box>
    </Box>
  );
};

export default App;
