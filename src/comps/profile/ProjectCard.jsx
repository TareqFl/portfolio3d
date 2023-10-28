import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { AspectRatio } from '@mui/joy';

export default function CardLayers3d() {
  return (
    <Box
      // onClick={() => window.open('https://github.com/TareqFl/react-studio-js')}
      onClick={() =>
        window.open('https://www.npmjs.com/package/react-studio-js')
      }
      sx={{
        cursor: 'pointer',
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: {
            xs: '200px',
            sm: '220px',
            md: '280px',
          },
          width: {
            xs: 220,
            md: 320,
          },
          backgroundColor: 'black',
          borderColor: 'white',
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="white">
          React-Studio-JS
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff">
            Card Cover
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background:
              'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            border: '1px solid',
            borderColor: '#000',
            backdropFilter: 'blur(1px)',
          }}
        >
          <AspectRatio
            // ratio="1"
            maxHeight={'100%'}
            sx={{
              minWidth: '100%',
              flexGrow: 1,
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <img
              src={
                'https://raw.githubusercontent.com/TareqFl/react-studio-js-example/main/img/ref_1.png'
              }
              srcSet={
                'https://raw.githubusercontent.com/TareqFl/react-studio-js-example/main/img/ref_1.png'
              }
              loading="lazy"
              alt="project"
            />
          </AspectRatio>
        </CardContent>
      </Card>
    </Box>
  );
}
