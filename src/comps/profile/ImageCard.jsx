import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import me from '../../assets/me.jpg';
import { Stack } from '@mui/material';
import { saveAs } from 'file-saver';
import cv from '../../assets/cv.pdf';
export default function UserCard() {
  const Row = ({ left, right }) => {
    return (
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Typography>{left}</Typography>
        <Typography>{right}</Typography>
      </Stack>
    );
  };
  return (
    <Box
      id="card"
      sx={{
        width: '100%',
        // position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
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
          resize: 'horizontal',
          bgcolor: 'transparent',
          border: 'none',
        }}
      >
        <AspectRatio
          flex
          ratio="1"
          maxHeight={182}
          sx={{ minWidth: 350, flexGrow: 1 }}
        >
          <img src={me} srcSet={me} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent>
          <Typography level="body-xl" fontSize="xl" fontWeight="lg">
            Tareq Fleyfel
          </Typography>
          <Typography level="body-md" fontWeight="lg" textColor="text.tertiary">
            Full Stack Software Developer
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'transparent',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xl" fontWeight="lg">
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
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => saveAs(cv, 'Tareq-Flyfel')}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => window.open('https://github.com/TareqFl')}
            >
              Github
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/tareq-fleifel-809900107/'
                )
              }
            >
              LinkedIn
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
