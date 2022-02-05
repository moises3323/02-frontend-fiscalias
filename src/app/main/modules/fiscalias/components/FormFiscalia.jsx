import ApsForm from '@components/ApsForm';
import ApsBasicDialog from '@components/dialogs/ApsBasicDialog';
import { useDispatch, useSelector } from 'react-redux';
import useFormFiscalia from '../hooks/useFormFiscalia';
import { toggleFormFiscalia } from '../store/actions';

const FormFiscalia = () => {
  const dispatch = useDispatch();
  const open = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.open
  );
  const { fields, formik, formikSubmit } = useFormFiscalia();

  const handleOpen = () => {
    dispatch(toggleFormFiscalia());
  };

  return (
    <ApsBasicDialog
      open={open}
      title={'Crear fiscalía'}
      description={
        'Ingrese todos los campos requeridos para crear una físcalía'
      }
      content={
        <div style={{ marginTop: '24px' }}>
          <ApsForm title="" fields={fields} formik={formik} />
        </div>
      }
      cancelProps={{
        text: 'Cancelar',
        onClick: handleOpen,
      }}
      okProps={{
        text: 'Guardar',
        onClick: formikSubmit,
      }}
    />
  );
};

export default FormFiscalia;