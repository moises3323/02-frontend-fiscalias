import React from 'react';
import { useFormikFields, useUpdateEffect } from '@hooks';
import { FieldValidations } from '@utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createFiscalia,
  deleteFiscalia,
  resetForm,
  toggleFormFiscalia,
} from '../store/actions';

const useFormFiscalia = () => {
  const dispatch = useDispatch();
  const form = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.form
  );
  const municipios = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.municipios
  );
  const departamentos = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.departamentos
  );
  const open = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.open
  );
  const isProcessing = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.processing
  );
  const [municipiosFiltered, setMunicipiosFiltered] = React.useState([]);

  const formik = useFormikFields({ fields: fields() });

  useUpdateEffect(() => {
    setMunicipiosFiltered(
      municipios.filter(
        (mpio) => mpio.departamento_id === formik.values.departamento_id?.value
      )
    );
  }, [formik.values.departamento_id]);

  useEffect(() => {
    formik.setValues({ ...form });
  }, [form]);

  const formikSubmit = () => {
    dispatch(createFiscalia(formik.values));
  };
  const handleOpen = () => {
    dispatch(toggleFormFiscalia());
  };

  const toogleModalFunction = (open) => {
    !open && dispatch(resetForm());
  };

  const fiscaliaDelete = () => dispatch(deleteFiscalia(formik.values.id));
  //INPUTS
  function fields() {
    return [
      {
        id: '1',
        label: 'Nombre',
        name: 'nombre',
        gridItem: true,
        inputProps: { maxLength: 100 },
        validations: FieldValidations.required,
      },
      {
        id: '2',
        label: 'Estado',
        name: 'estado',
        gridItem: true,
        select: true,
        options: [
          {
            value: 1,
            label: 'Activo',
          },
          {
            value: 0,
            label: 'Inactivo',
          },
        ],
      },
      {
        id: '3',
        label: 'Departamento',
        name: 'departamento_id',
        gridItem: true,
        type: 'autocomplete',
        options: departamentos,
        validations: FieldValidations.requiredSelect,
      },
      {
        id: '4',
        label: 'Municipio',
        name: 'municipio_id',
        gridItem: true,
        type: 'autocomplete',
        options: municipiosFiltered,
        validations: FieldValidations.requiredSelect,
      },
      {
        id: '5',
        label: 'Dirección completa',
        name: 'direccion',
        gridItem: true,
        inputProps: { maxLength: 300 },
        gridProps: { md: 12 },
        validations: FieldValidations.required,
      },
      {
        id: '6',
        label: 'Descripción',
        name: 'descripcion',
        gridItem: true,
        multiline: true,
        rows: 4,
        gridProps: { md: 12 },
        inputProps: { maxLength: 300 },
        validations: FieldValidations.required,
      },
    ];
  }

  return {
    fields: fields(),
    formik,
    formikSubmit,
    open,
    isProcessing,
    handleOpen,
    toogleModalFunction,
    fiscaliaDelete,
  };
};

export default useFormFiscalia;
