import { Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import MoreMenu from './MoreMenu';

const titlePropsLocal = {
  variant: 'h1',
  color: 'primary',
};

const subtitlePropsLocal = {
  variant: 'subtitle2',
  sx: { color: (theme) => theme.palette.secondary[500] },
};

/**
 * @title {string} Título de la página.
 * @titleProps {object} objeto de propiedades para modificar el título.
 * @subtitle {string} Subtítulo de la página.
 * @subtitleProps {string} Subtítulo de la página.
 * @actions {array} es un array de objetos que se mostraran como acciones.
 * @container {components} contenido de la página.
 *
 * ---------------------EJEMPLO DE USO---------------------
 * <GeneralContainer
 *  title='Dashboard'
 *  subtitle='Subtitulo del dashboard'
 *  actions=[
  {
    id: 1,
    icon: <PrintIcon fontSize="small" />,
    title: 'Imprimir',
    onClick: () => console.log('Imprimir'),
  },
  {
    id: 2,
    icon: <CloudDownloadIcon fontSize="small" />,
    title: 'Descargar',
    onClick: () => console.log('Descargar'),
  },
]
 *  container={<div>Contenido de la página</div>}
 * />
 * --------------------------------------------------------
 */

const GeneralContainer = ({
  title = 'Title',
  titleProps,
  subtitle = 'Subtitle',
  subtitleProps,
  buttonProps,
  actions,
  container,
  // ...props
}) => {
  return (
    <div style={{ /* height: '100vh' */ height: 'auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: 'auto',
        }}
      >
        <div>
          <div>
            <Typography {...titlePropsLocal} {...titleProps} children={title} />
          </div>
          <Typography
            {...subtitlePropsLocal}
            {...subtitleProps}
            children={subtitle}
          />
        </div>
        <MoreMenu actions={actions} />
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        {container}
        <div style={{ height: '100px' }}></div>
        {buttonProps && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <LoadingButton
              sx={{
                borderRadius: '36px',
                position: 'fixed',
                bottom: '50px',
              }}
              color="primary"
              //loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              {...buttonProps}
            >
              {buttonProps.text || 'Guardar'}
            </LoadingButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralContainer;
