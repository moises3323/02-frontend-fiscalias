export const overrideComponents = (palette = {}) => {
  const textField = {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: palette.primary['A200'],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          input: {
            color: palette.primary['500'],
          },
          ':after': {
            borderBottomColor: palette.primary['A200'],
          },
          '&.Mui-focused': {
            backgroundColor: palette.primary[50],
          },
        },
      },
    },
  };

  return { ...textField };
};
