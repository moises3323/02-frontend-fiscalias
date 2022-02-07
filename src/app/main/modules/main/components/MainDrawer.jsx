import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Avatar as MuiAvatar,
  Box,
  Drawer as MuiDrawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Gavel as GavelIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions';

const styledIcon = {
  color: (theme) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
};

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const iconListClass = {
  '&.MuiListItemIcon-root': { minWidth: 'auto' },
};

const iconListClassOpen = {
  '&.MuiListItemIcon-root': { minWidth: '36px' },
};

const boxIconAvatar = {
  '&.MuiBox-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px',
  },
};

const Avatar = styled(MuiAvatar)(({ theme, open }) => ({
  '&.MuiAvatar-root': {
    [theme.breakpoints.down('sm')]: {
      width: '48px',
      height: '48px',
      marginBottom: '30px',
      backgroundColor: 'orange',
    },
    [theme.breakpoints.up('sm')]: {
      width: open ? '86px' : '48px',
      height: open ? '86px' : '48px',
    },
  },
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    width: 260,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      position: 'relative',
      ...(!open && {
        overflowX: 'hidden',
        width: '80px',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
    },
    [theme.breakpoints.down('sm')]: {
      width: 216,
    },
  },
}));

const MainDrawer = () => {
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch();
  const open = useSelector(
    ({ MainNavigation }) => MainNavigation.MainDrawer.openDrawer
  );

  const toggleDrawer = () => {
    dispatch(Actions.toggleMainDrawer());
  };
  const routes = [
    {
      to: 'fiscalias',
      icon: <GavelIcon sx={styledIcon} />,
      name: 'Fiscalias',
    },
  ];

  return (
    <Drawer
      variant={upSM ? 'permanent' : 'temporary'}
      open={open}
      onClose={toggleDrawer}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          '&.MuiToolbar-root': {
            justifyContent: open ? 'flex-end' : 'center',
          },
        }}
      >
        <IconButton onClick={toggleDrawer} sx={styledIcon}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Box sx={boxIconAvatar}>
        <Avatar
          open={open}
          src="https://cdn2.actitudfem.com/media/files/styles/large/public/images/2018/01/beckdestacada.jpg"
        ></Avatar>
        {open && (
          <div style={{ paddingTop: '8px' }}>
            <Typography
              sx={{ color: theme.palette.grey[50] }}
              children="David Beckham"
            />
            <Typography
              sx={{ color: theme.palette.grey[50] }}
              children="Administrador"
            />
          </div>
        )}
      </Box>

      {routes.map((route) => (
        <ListItem
          button
          key={route.to}
          sx={buttonStyle}
          component={NavLink}
          to={route.to}
          style={({ isActive }) =>
            isActive ? { backgroundColor: theme.palette.primary['A200'] } : {}
          }
        >
          <ListItemIcon sx={open ? iconListClassOpen : iconListClass}>
            {route.icon}
          </ListItemIcon>
          {open && <ListItemText primary={route.name} sx={styledIcon} />}
        </ListItem>
      ))}
    </Drawer>
  );
};

export default MainDrawer;
