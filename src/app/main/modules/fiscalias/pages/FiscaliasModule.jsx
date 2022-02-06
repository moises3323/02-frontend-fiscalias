import React, { useLayoutEffect } from 'react';
import GeneralContainer from '@components/generalContainer/GeneralContainer';
import PrintIcon from '@mui/icons-material/Print';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Grid } from '@mui/material';
import ApsTable from '@components/table/ApsTable';
import FormFiscalia from '../components/FormFiscalia';
import withReducer from '@store/withReducer';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFiscalias,
  setFormFiscalia,
  toggleFormFiscalia,
} from '../store/actions';
import AddIcon from '@mui/icons-material/Add';

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

const FiscaliasModule = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getFiscalias());
  }, []);

  const fiscalias = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule?.fiscaliaForm?.fiscaliasList
  );

  const handleOpen = () => {
    dispatch(toggleFormFiscalia());
  };
  const handleEditar = (form) => {
    dispatch(setFormFiscalia(form));
    dispatch(toggleFormFiscalia());
  };

  const columns = [
    { id: 'nombre', label: 'Nombre fiscalía', minWidth: 170 },
    { id: 'direccion', label: 'Dirección', minWidth: 100 },
    {
      id: 'estado',
      label: 'Estado',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'acciones',
      label: 'Acciones',
      minWidth: 170,
      align: 'right',
    },
  ];

  const rows = fiscalias.map((fiscalia) => ({
    nombre: fiscalia.nombre,
    direccion: fiscalia.direccion,
    estado: fiscalia.estado,
    acciones: () => handleEditar(fiscalia),
  }));

  return (
    <>
      <GeneralContainer
        title="Fiscalías"
        subtitle="Fiscalías de Guatemala"
        actions={itemsActions}
        buttonProps={{
          text: 'Crear',
          onClick: handleOpen,
          startIcon: <AddIcon />,
        }}
        container={
          <Grid container spacing={3}>
            <Grid item md={12} sm={12}>
              <ApsTable rows={rows} columns={columns} />
            </Grid>
          </Grid>
        }
      />
      <FormFiscalia />
    </>
  );
};
export default withReducer('FiscaliasModule', reducer)(FiscaliasModule);
