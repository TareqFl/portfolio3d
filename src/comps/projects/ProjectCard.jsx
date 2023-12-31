import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import { Box, Grid, IconButton, Stack } from '@mui/material';

export default function BioCard({
  icon,
  discription,
  link,
  title,
  stacks,
  img,
  button,
  st,
  icon2,
}) {
  return (
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          boxShadow: 'lg',
          backgroundColor: 'transparent',
          height: '250px',
        }}>
        <CardContent
          sx={{
            alignItems: 'center',
            textAlign: 'center',
          }}>
          {icon}
          <IconButton sx={{ ...st }}>{img && <img src={img} />}</IconButton>
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <Typography
              level='title-lg'
              sx={{
                color: 'white',
              }}>
              {title}
            </Typography>
            {icon2}
          </Stack>

          <Typography
            level='body-sm'
            sx={{ maxWidth: '24ch', color: 'white', mt: 1 }}>
            {discription}
          </Typography>

          {stacks}
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'transparent' }}>
          <CardActions buttonFlex='1'>
            <ButtonGroup
              variant='outlined'
              sx={{ bgcolor: 'background.surface' }}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => window.open(link)}
                sx={{ textTransform: 'none' }}>
                <Typography color='white'>
                  {button ? `${button}` : 'Github'}
                </Typography>
              </Button>
            </ButtonGroup>
          </CardActions>
        </CardOverflow>
      </Card>
    </Grid>
  );
}
