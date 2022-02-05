import { AppBar as MuiAppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';
import MoreMenu from '@components/generalContainer/MoreMenu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary['50'],
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const MainAppBar = ({ sx }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <div style={{ marginRight: '16px' }}>
          <MoreMenu
            icon={<AccountCircleIcon />}
            actions={[
              {
                id: 1,
                icon: <ArrowBackIcon />,
                title: 'Salir',
                onClick: () => navigate('/', { replace: true }),
              },
            ]}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
