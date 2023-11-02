import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsChatSquareDots, BsServer, BsSoundwave } from 'react-icons/bs';
import {
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { IoGameControllerOutline } from 'react-icons/io5';
import ProjectCard from './ProjectCard';
import { TbBrandNodejs, TbBrandSocketIo } from 'react-icons/tb';
const index = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4}>
      <Typography textAlign={'start'} variant="h5" fontWeight={'bold'}>
        Sample Projects
      </Typography>
      <Grid container gap={2} alignItems={'center'} justifyContent={'center'}>
        <ProjectCard
          title={'React-Studio-JS'}
          icon={<BsSoundwave size={48} fill="purple" />}
          discription={
            'An online Audio Editor tool to increase your studio productivity'
          }
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiTypescript color="blue" size={24} />
              <SiNextdotjs color="white" size={24} />
            </Stack>
          }
          link={'https://github.com/TareqFl/react-studio-js-Next'}
        />
        <ProjectCard
          title={'Chatsy Chat'}
          icon={<BsChatSquareDots size={48} fill="white" />}
          discription={'A simple Web Chat App that simulate a chat room'}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiTypescript color="blue" size={24} />
              <SiReact color="#03d1f6" size={24} />
              <TbBrandNodejs color="green" size={24} />
              <TbBrandSocketIo color="white" size={24} />
            </Stack>
          }
        />
        <ProjectCard
          title={'Api Server'}
          icon={<BsServer size={48} fill="white" />}
          discription={'Api server for dummy ecommerce json data'}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiPython size={24} />
            </Stack>
          }
          link={'https://github.com/TareqFl/ORDERME_backend'}
        />
        <ProjectCard
          title={'ConquerBlitz'}
          icon={
            <IoGameControllerOutline size={48} fill="white" color="white" />
          }
          discription={'A PVP game written in JS'}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiReact color="#03d1f6" size={24} />
              <SiJavascript color="yellow" size={24} />
            </Stack>
          }
          link={'https://github.com/TareqFl/ConquerBlitz'}
        />
      </Grid>
    </Box>
  );
};

export default index;
