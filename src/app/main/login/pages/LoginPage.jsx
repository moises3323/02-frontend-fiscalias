import { Paper, Grid } from '@mui/material';
import LoginForm from '../components/LoginForm';
import withReducer from '@store/withReducer';
import reducer from '../store/reducers';

const leftGridProps = {
  item: true,
  xs: false,
  sm: false,
  md: 6,
  sx: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

const rightGridProps = {
  item: true,
  xs: 12,
  sm: 12,
  md: 6,
  component: Paper,
  elevation: 0,
  sx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const SignInSide = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid {...leftGridProps} />
      <Grid {...rightGridProps}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default withReducer('SignInSide', reducer)(SignInSide);
