/* Redux */
import Provider from 'react-redux/es/components/Provider';
import store from './store';
/* Permission provider */
import { AbilityProvider } from './context/permissions/AbilityContext';

import CustomTheme from '@components/theme/CustomTheme';
import Navigation from '@components/routerComponents/Navigation';
import { routes } from './routes/routes';

// import Example from "./@components/Example";
// import { Grid } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <AbilityProvider>
        <CustomTheme>
          <Navigation routes={routes} />

          {/* <Grid container>
        <Grid item>
          <Example button={{ name: "Crear" }} I={"Create"} this={"Ventas"} />
        </Grid>
        <Grid item>
          <Example button={{ name: "Delete" }} I={"Delete"} this={"Ventas"} />
        </Grid>
      </Grid> */}
        </CustomTheme>
      </AbilityProvider>
    </Provider>
  );
}

export default App;
