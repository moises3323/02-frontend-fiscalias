import { AppBar as MuiAppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AccountCircle as AccountCircleIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary['50'],
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const MainAppBar = ({ sx }) => {
  const dispatch = useDispatch();

  return (
    <AppBar elevation={0} position="absolute" sx={sx}>
      <Toolbar
        sx={{
          '&.MuiToolbar-root': {
            paddingLeft: 0,
            paddingRight: 0,
            display: 'flex',
            justifyContent: 'space-between',
          },
        }}
      >
        <IconButton
          color="primary"
          sx={{
            minHeight: '48px',
            minWidth: '48px',
            margin: '4px',
          }}
          onClick={() => dispatch(Actions.toggleMainDrawer())}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <IconButton
            color="primary"
            sx={{
              minHeight: '48px',
              minWidth: '48px',
              margin: '8px',
            }}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              minHeight: '48px',
              minWidth: '48px',
              margin: '8px',
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
