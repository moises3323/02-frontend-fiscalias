import GeneralContainer from '@components/generalContainer/GeneralContainer';
import PrintIcon from '@mui/icons-material/Print';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Grid } from '@mui/material';

const itemsActions = [
  {
    id: 1,
    icon: <PrintIcon />,
    title: 'Imprimir',
    onClick: () => console.log('Imprimir'),
  },
  {
    id: 2,
    icon: <CloudDownloadIcon />,
    title: 'Descargar',
    onClick: () => console.log('Descargar'),
  },
];

const DashboardModule = () => {
  return (
    <GeneralContainer
      title="Dashboard"
      subtitle="Subtitulo del dashboard"
      actions={itemsActions}
      container={
        <Grid container spacing={3}>
          <Grid item md={6} sm={12}>
            <img
              style={{ width: '100%' }}
              src={'https://cdn-icons-png.flaticon.com/512/1168/1168833.png'}
            ></img>
          </Grid>
          <Grid item md={6} sm={12}>
            <img
              style={{ width: '100%' }}
              src={'https://cdn-icons-png.flaticon.com/512/1191/1191637.png'}
            ></img>
          </Grid>
          <Grid item md={6} sm={12}>
            <img
              style={{ width: '100%' }}
              src={
                'https://rentadrone.cl/wp-content/uploads/2016/12/pie-chart-1.png'
              }
            ></img>
          </Grid>
          <Grid item md={6} sm={12}>
            <img
              style={{ width: '100%' }}
              src={
                'https://static.vecteezy.com/system/resources/previews/001/187/079/non_2x/chart-png.png'
              }
            ></img>
          </Grid>
        </Grid>
      }
    />
  );
};
export default DashboardModule;
