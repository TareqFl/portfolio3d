import { Stack } from '@mui/material';
import React from 'react';
import ImageCard from './ImageCard';

import { Reveal } from 'react-reveal';
import OpenSource from './OpenSource';
import Skills from '../skills/Skills';

const ProfileContainer = () => {
  return (
    <Stack gap={12}>
      <Reveal>
        <ImageCard />
      </Reveal>
      <Reveal>
        <OpenSource />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
    </Stack>
  );
};

export default ProfileContainer;
