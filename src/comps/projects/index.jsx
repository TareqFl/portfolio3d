import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  BsChatSquareDots,
  BsImage,
  BsServer,
  BsSoundwave,
} from 'react-icons/bs';
import {
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';
import { IoGameControllerOutline } from 'react-icons/io5';
import ProjectCard from './ProjectCard';
import { TbBrandNodejs, TbBrandSocketIo, TbJson } from 'react-icons/tb';
import giphy from '../../assets/giphy.gif';
import blitz from '../../assets/blitz.png';
const index = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4} mb={4}>
      <Typography textAlign={'start'} variant='h5' fontWeight={'bold'}>
        Sample Projects
      </Typography>
      <Grid container gap={2} alignItems={'center'} justifyContent={'center'}>
        <ProjectCard
          title={'React-Studio-JS'}
          icon={<BsSoundwave size={48} fill='purple' />}
          discription={
            'An online Audio Editor tool to increase your studio productivity'
          }
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiTypescript color='blue' size={24} />
              <SiNextdotjs color='white' size={24} />
            </Stack>
          }
          link={'https://github.com/TareqFl/react-studio-js-Next'}
        />
        <ProjectCard
          title={'Chatsy Chat'}
          icon={<BsChatSquareDots size={48} fill='white' />}
          discription={'A simple Web Chat App that simulate a chat room'}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiTypescript color='blue' size={24} />
              <SiReact color='#03d1f6' size={24} />
              <TbBrandNodejs color='green' size={24} />
              <TbBrandSocketIo color='white' size={24} />
            </Stack>
          }
          link={'https://github.com/TareqFl/ChatsyChat'}
        />
        <ProjectCard
          title={'Api Server'}
          icon={<BsServer size={48} fill='white' />}
          discription={'Api server for JSON dummy data, NoSql and JWT'}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <TbBrandNodejs size={24} color='green' />
              <TbJson size={24} color='purple' />
              <SiMongodb size={24} color='green' />
              <SiJsonwebtokens size={24} color='white' />
              <SiTypescript color='blue' size={24} />
            </Stack>
          }
          link={'https://github.com/TareqFl/ApiServer.git'}
        />
        <ProjectCard
          title={'ConquerBlitz'}
          img={blitz}
          icon2={
            <IoGameControllerOutline size={22} fill='white' color='white' />
          }
          button={'Link'}
          st={{
            overflow: 'hidden',
            height: 75,
            width: 75,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            img: {
              height: '100%',
              // width: '100%',
              scale: '2',
              position: 'relative',
              right: 5,
              bottom: 5,
            },
          }}
          discription={'A PVP game written in JS'}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiReact color='#03d1f6' size={24} />
              <SiJavascript color='yellow' size={24} />
            </Stack>
          }
          link={'https://conquer-blitz.vercel.app/'}
        />
        <ProjectCard
          title={'Sun & Cloud'}
          discription={'Css animation written in JS'}
          img={giphy}
          stacks={
            <Stack direction={'row'} gap={1} mt={1}>
              <SiMui color='blue' size={24} />
              <SiStyledcomponents color='white' size={24} />
            </Stack>
          }
          link={'https://tareqfl.github.io/SunCloudAnimation/'}
          button={'Link'}
          st={{
            overflow: 'hidden',
            height: 75,
            width: 75,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            img: {
              height: '100%',
              // width: '100%',
              scale: '2',
              position: 'relative',
              right: 5,
              bottom: 5,
            },
          }}
        />
      </Grid>
    </Box>
  );
};

export default index;
