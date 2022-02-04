import { useFormikFields } from '@hooks';
import { FieldValidations } from '@utils';

const useFormAction = () => {
  const fields = [
    {
      id: '1',
      label: 'Nombre',
      name: 'nombre',
      gridItem: true,
      // required: true,
      inputProps: { maxLength: 5 },
      validations: FieldValidations.numberInger({ required: true }),
    },
    {
      id: '2',
      label: 'Estado',
      name: 'estado',
      gridItem: true,
      select: true,
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
      label: 'Color',
      name: 'color',
      gridItem: true,
      select: true,
      options: [
        {
          value: '1',
          label: 'Red',
        },
        {
          value: '2',
          label: 'Black',
        },
      ],
      validations: FieldValidations.requiredSelect,
    },
    {
      id: '4',
      label: 'Icono',
      name: 'icon',
      gridItem: true,
      select: true,
      options: [
        {
          value: '1',
          label: 'People',
        },
        {
          value: '2',
          label: 'Tools',
        },
      ],
      validations: FieldValidations.requiredSelect,
    },
    {
      id: '5',
      label: 'Descripción',
      name: 'descripcion',
      gridItem: true,
      multiline: true,
      rows: 4,
      gridProps: { md: 12 },
      inputProps: { maxLength: 5 },
      validations: FieldValidations.required,
    },
    {
      id: '6',
      label: 'Autocomplete',
      name: 'seleccionable',
      gridItem: true,
      gridProps: { md: 12 },
      type: 'autocomplete',
      required: true,
      options: [
        { label: 'The Shawshank Redemption', value: 1994 },
        { label: 'The Godfather', value: 1972 },
        { label: 'The Godfather: Part II', value: 1974 },
        { label: 'The Dark Knight', value: 2008 },
        { label: '12 Angry Men', value: 1957 },
        { label: "Schindler's List", value: 1993 },
        { label: 'Pulp Fiction', value: 1994 },
      ],
      validations: FieldValidations.requiredSelect,
      // value: { label: 'The Shawshank Redemption', value: 1994 },
    },
  ];
  const formik = useFormikFields({ fields });

  const formikSubmit = () => {
    console.log(formik.values);
  };

  return { fields, formik, formikSubmit };
};

export default useFormAction;
