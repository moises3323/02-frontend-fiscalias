import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
});

export const typography = {
  // fontFamily: [
  //     'Work Sans',
  //     'sans-serif'
  // ],
  h1: {
    fontWeight: 900,
    fontSize: 40,
    fontStyle: 'normal',
    // letterSpacing: -1.5,
    // [breakpoints.down('lg')]: {
    //     fontSize: 40
    // },
    [breakpoints.down('sm')]: {
      fontSize: 32,
    },
    [breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  // h2: {
  //     fontSize: 60,
  //     fontWeight: 700,
  //     letterSpacing: -0.5,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '5.1rem'
  //     },
  //     [breakpoints.down('sm')]: {
  //         fontSize: '4.6rem'
  //     },
  //     [breakpoints.down('xs')]: {
  //         fontSize: '3.8rem'
  //     },
  // },
  // h3: {
  //     fontSize: 48,
  //     fontWeight: 700,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '4.3rem'
  //     },
  //     [breakpoints.down('md')]: {
  //         fontSize: '4rem'
  //     },
  //     [breakpoints.down('xs')]: {
  //         fontSize: '3.2rem'
  //     },
  // },
  // h4: {
  //     fontSize: 34,
  //     fontWeight: 700,
  //     letterSpacing: 0.25,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '3rem'
  //     },
  //     [breakpoints.down('md')]: {
  //         fontSize: '2.8rem'
  //     },
  //     [breakpoints.down('xs')]: {
  //         fontSize: '2.5rem'
  //     },
  // },
  h5: {
    fontWeight: 700,
    fontSize: 24,
    /* [breakpoints.down('lg')]: {
           fontSize: '2.2rem'
       },
       [breakpoints.down('sm')]: {
           fontSize: '2rem'
       } */
  },
  h6: {
    fontWeight: 'bold',
    fontSize: 20,
    // textTransform: 'capitalize'
    textTransform: 'none',
    // [breakpoints.down('lg')]: {
    //     fontSize: '1.7rem'
    // }
  },
  subtitle1: {
    fontWeight: 'normal',
    fontSize: 24,
    //letterSpacing: 0.15,
    //[breakpoints.down('lg')]: {
    //    fontSize: '1.5rem'
    //}
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.1,
    /* [breakpoints.down('lg')]: {
      fontSize: '1.3rem',
    }, */
  },
  // body1: {
  //     fontWeight: 400,
  //     fontSize: 16,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '1.5rem'
  //     },
  // },
  // body2: {
  //     fontWeight: 400,
  //     fontSize: 14,
  //     letterSpacing: -0.15,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '1.3rem'
  //     },
  // },
  // button: {
  //     fontWeight: 500,
  //     fontSize: 14,
  //     letterSpacing: 1.25,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '1.3rem'
  //     },
  // },
  // caption: {
  //     fontWeight: 400,
  //     fontSize: 12,
  //     letterSpacing: 0.4,
  //     [breakpoints.down('lg')]: {
  //         fontSize: '1.1rem'
  //     },
  // },
  // overline: {
  //     fontWeight: 500,
  //     fontSize: 10,
  //     lineHeight: 1.5,
  //     letterSpacing: 1.5
  // }
};
