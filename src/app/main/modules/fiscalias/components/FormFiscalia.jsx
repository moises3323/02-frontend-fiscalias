import ApsForm from '@components/ApsForm';
import ApsBasicDialog from '@components/dialogs/ApsBasicDialog';
import { useUpdateEffect } from '@hooks';
import { useDispatch, useSelector } from 'react-redux';
import useFormFiscalia from '../hooks/useFormFiscalia';
import { deleteFiscalia, toggleFormFiscalia } from '../store/actions';

const FormFiscalia = () => {
  const dispatch = useDispatch();
  const open = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.open
  );
  const isProcessing = useSelector(
    ({ FiscaliasModule }) => FiscaliasModule.fiscaliaForm.processing
  );

  const { fields, formik, formikSubmit } = useFormFiscalia();

  const handleOpen = () => {
    dispatch(toggleFormFiscalia());
  };

  useUpdateEffect(() => {
    if (!isProcessing) {
      handleOpen();
      formik.resetForm(formik.initialValues);
    }
  }, [isProcessing]);

  return (
    <ApsBasicDialog
      deleteButtonProps={
        formik.values.id
          ? { onClick: () => dispatch(deleteFiscalia(formik.values.id)) }
          : undefined
      }
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
        disabled: !formik.isValid || isProcessing,
      }}
    />
  );
};

export default FormFiscalia;
