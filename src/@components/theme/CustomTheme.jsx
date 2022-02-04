import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeConfig from '@config/themeConfig/theme';

// import {useSelector} from 'react-redux';

const theme = createTheme(ThemeConfig.default);

const CustomTheme = (props) => {
  //TODO: usar tema configurable
  //const mainTheme = useSelector(({theme}) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default CustomTheme;
