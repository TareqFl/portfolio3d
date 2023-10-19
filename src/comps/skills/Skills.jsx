import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { DiDart } from 'react-icons/di';
import {
  SiJavascript,
  SiFlutter,
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiRedux,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si';
import { TbBrandNodejs, TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  return (
    <Box>
      <Typography textAlign={'start'} variant="h4" fontWeight={'bold'}>
        Skills
      </Typography>
      <Stack
        direction={'row'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
        sx={{ svg: { fontSize: '64px', display: 'block' } }}
      >
        <SiJavascript color="yellow" />
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            overflow: 'hidden',
          }}
        >
          <SiTypescript color="blue" />
        </Box>
        <SiNextdotjs color="white" />
        <TbBrandNodejs color="green" />
        <SiReact color="#03d1f6" />
        <DiDart color="#2bb0ed" />
        <SiRedux color="purple" />
        <SiFlutter color="#5dc8f7" />
        <TbBrandReactNative color="#03d1f6" />
        <SiFirebase color="#ffcc35" />
        <SiMongodb color="green" />
      </Stack>
    </Box>
  );
};

export default Skills;
