import { Stack } from '@mui/material';
import React from 'react';
import ImageCard from './ImageCard';
import { Reveal } from 'react-reveal';
import OpenSource from './OpenSource';

const ProfileContainer = () => {
  return (
    <Stack
      sx={{
        marginTop: '250px',
        gap: 12,
      }}
    >
      <Reveal>
        <ImageCard />
      </Reveal>
      <Reveal>
        <OpenSource />
      </Reveal>
    </Stack>
  );
};

export default ProfileContainer;
