import { useFormikFields } from '@hooks';
import { FieldValidations } from '@utils';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const fields = [
  {
    id: '1',
    label: 'Nombre',
    name: 'nombre',
    gridItem: true,
    // required: true,
    inputProps: { maxLength: 100 },
    validations: FieldValidations.required,
  },
  {
    id: '2',
    label: 'Estado',
    name: 'estado',
    gridItem: true,
    type: 'autocomplete',
    options: [
      {
        value: '1',
        label: 'Activo',
      },
      {
        value: '2',
        label: 'Inactivo',
      },
    ],
    validations: FieldValidations.requiredSelect,
  },
  {
    id: '3',
    label: 'Departamento',
    name: 'departamento',
    gridItem: true,
    type: 'autocomplete',
    options: [
      {
        value: '1',
        label: 'Jutiapa',
      },
      {
        value: '2',
        label: 'Guatemala',
      },
    ],
    validations: FieldValidations.requiredSelect,
  },
  {
    id: '4',
    label: 'Municipio',
    name: 'municipio',
    gridItem: true,
    type: 'autocomplete',
    options: [
      {
        value: '1',
        label: 'Jutiapa',
      },
      {
        value: '2',
        label: 'Jeréz',
      },
    ],
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

const useFormFiscalia = () => {
  const form = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.form
  );
  const formik = useFormikFields({ fields });
  useEffect(()=>{
    formik.setValues({...form})
  },[form]);

 

  const formikSubmit = () => {
    console.log(formik.values);
  };

  return { fields, formik, formikSubmit };
};

export default useFormFiscalia;
