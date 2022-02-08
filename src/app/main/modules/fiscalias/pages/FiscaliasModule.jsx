import React, { useLayoutEffect } from 'react';
import GeneralContainer from '@components/generalContainer/GeneralContainer';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
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

import ReportePdf from '../components/ReportePdf';

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
    { id: 'nombre', label: 'Fiscalía', minWidth: 170 },
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
    estado: fiscalia.estado === 1 ? 'ACTIVA' : 'INACTIVA',
    acciones: () => handleEditar(fiscalia),
  }));

  const itemsActions = [
    {
      id: 1,
      icon: <CloudDownloadIcon />,
      title: <ReportePdf rows={rows} />,
      onClick: () => console.log('Descargar'),
    },
  ];

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
        container={<ApsTable rows={rows} columns={columns} />}
      />
      <FormFiscalia />
    </>
  );
};
export default withReducer('FiscaliasModule', reducer)(FiscaliasModule);
