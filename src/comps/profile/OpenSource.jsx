import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';
import OpenSourceText from './OpenSourceText';
import { Bars } from 'react-loader-spinner';
const OpenSource = () => {
  const features = [
    'TypeScript support',
    'Edit multi tracks',
    'Save to Local storage (optional & in Progress)',
    'Dynamic start-End',
    'Split',
    'Cut',
    'Fades',
    'Track shift',
    'Annotations support & download with CRUD operation',
  ];

  return (
    <Stack alignItems={'center'} sx={{ gap: 12 }}>
      <Box sx={{ width: '100%' }}>
        <Typography textAlign={'start'} variant="h5" fontWeight={'bold'}>
          OpenSource Project
        </Typography>
      </Box>

      <ProjectCard />
      <OpenSourceText />
      <Typography
        textAlign={'start'}
        sx={{
          fontSize: {
            xs: '0.8rem',
            sm: '1rem',
            md: '1.2rem',
          },
        }}
      >
        React-Studio-JS is a JavaScript package that provides a web-based audio
        waveform playlist editor (its updated version of waveform playlist). It
        allows you to create and edit playlists of audio tracks with various
        features like setting cues, fades, track start/end times, setting timed
        annotation and supporting CRUD operations for each annotation. It's
        built using ES2015 and the Web Audio API, which enables web applications
        to work with audio in the browser.
      </Typography>
      <Box width={'100%'} gap={1}>
        <Typography variant="h5" textAlign={'start'} fontWeight={'bold'} mb={2}>
          Features
        </Typography>
        <Stack gap={1} padding={4}>
          {features.map((feature) => {
            return (
              <Typography key={feature} display={'list-item'}>
                {feature}
              </Typography>
            );
          })}
        </Stack>
      </Box>
      <Stack>
        <Button
          sx={{ gap: 1 }}
          onClick={() =>
            window.open('https://react-studio-js-next.vercel.app/')
          }
        >
          <Bars
            height="18"
            width="18"
            color="#9c27b0"
            ariaLabel="bars-loading"
            visible={true}
          />
          <Typography>React-Studio-JS NextJS + TS Demo</Typography>
        </Button>
        <Button
          sx={{ gap: 1 }}
          onClick={() =>
            window.open('https://react-studio-js-example.vercel.app/')
          }
        >
          <Bars
            height="18"
            width="18"
            color="#9c27b0"
            ariaLabel="bars-loading"
            visible={true}
          />
          <Typography>React-Studio-JS-example React-Vite Demo</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default OpenSource;
