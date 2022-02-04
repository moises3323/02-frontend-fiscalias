import { defaultPalette } from './palettes';
import { typography } from './typography';
import { overrideComponents } from './overrides';

const configTheme = {
  default: {
    palette: defaultPalette,
    // palette: {mode:'dark'},//dark theme
    typography: typography,
    // shadows:[],
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1440,
        special: 3166,
      },
    },
    components: overrideComponents(defaultPalette),
  },
};

export default configTheme;
