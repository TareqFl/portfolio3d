import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Typography } from '@mui/material';
import Sheet from '@mui/joy/Sheet';
import me from '../../assets/me.jpg';
import { Stack } from '@mui/material';
import { saveAs } from 'file-saver';
import cv from '../../assets/cv.pdf';
import { SiGithub, SiLinkedin } from 'react-icons/si';
export default function UserCard() {
  const Row = ({ left, right }) => {
    return (
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '0.6rem',
              sm: '0.7rem',
              md: '1rem',
            },
          }}
        >
          {left}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '0.6rem',
              sm: '0.7rem',
              md: '1rem',
            },
          }}
        >
          {right}
        </Typography>
      </Stack>
    );
  };
  return (
    <Box
      id="card"
      sx={{
        width: '100%',
        // position: 'relative',
        // overflow: { xs: 'auto', sm: 'initial' },
        overflow: 'hidden',
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },

          overflow: 'auto',
          // resize: 'horizontal',
          resize: 'none',
          bgcolor: 'transparent',
          border: 'none',
        }}
      >
        <AspectRatio
          flex={false}
          ratio="1"
          maxHeight={182}
          sx={{
            minWidth: {
              xs: '100%',
              sm: 350,
            },
            flexGrow: 1,
            // img: {
            //   width: '100%',
            // },
          }}
        >
          <img src={me} srcSet={me} loading="lazy" alt="me" />
        </AspectRatio>
        <CardContent>
          <Typography variant={'h4'}>Tareq Fleyfel</Typography>
          <Typography variant="h6" fontSize={'1rem'}>
            Full Stack Software Developer
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'transparent',
              borderRadius: 'sm',
              p: 2,
              my: 1.5,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: {
                xs: 1,
                sm: 3,
              },
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.8rem',
                    md: '0.95rem',
                  },
                }}
              >
                A skilled Javascript Software Developer with expertise in
                various tools and technical developments to drive innovation and
                improvement throughout an entire software development life
                cycle.
              </Typography>
            </div>
            <Stack>
              <Row left={'Phone'} right={`+961 71 53 54 03`} />
              <Row left={'Phone'} right={'+90 552 809 65 14'} />
              <Row left={'Country'} right={'Lebanon'} />
            </Stack>
          </Sheet>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              alignItems: 'center',
              svg: {
                ':hover': {
                  scale: '1.3',
                },
                transition: '.25s',
              },
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => saveAs(cv, 'Tareq-Flyfel')}
            >
              Download CV
            </Button>
            <SiGithub
              color="white"
              size={'24px'}
              onClick={() => window.open('https://github.com/TareqFl')}
              style={{
                cursor: 'pointer',
              }}
            />
            <SiLinkedin
              color="#0370ae"
              size={'24px'}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/tareq-fleifel-809900107/'
                )
              }
              style={{
                cursor: 'pointer',
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
