import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

export default function DrawerContent({ handleDrawerClose, drawerWidth, open, knownCountries }) {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
      </DrawerHeader>
      <Divider />
      <Grid sx={{ marginTop: '10px', width: '100%', display: 'flex', flexWrap: 'wrap', maxHeight: '90%', padding: '.21em' }}>
        {knownCountries
          .filter((e) => e.picked === true)
          .sort()
          .map((item) => {
            return (
              <Chip
                label={item.country}
                variant="outlined"
                size="small"
                sx={{
                  margin: 0.3,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
                }}
              />
            );
          })}
      </Grid>
    </Drawer>
  );
}
