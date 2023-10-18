import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';
import OpenSourceText from './OpenSourceText';
const OpenSource = () => {
  return (
    <Stack alignItems={'center'} sx={{ gap: 12 }}>
      <Box sx={{ width: '100%' }}>
        <Typography textAlign={'start'} variant="h4" fontWeight={'bold'}>
          OpenSource Project
        </Typography>
      </Box>

      <ProjectCard />
      <OpenSourceText />
    </Stack>
  );
};

export default OpenSource;
