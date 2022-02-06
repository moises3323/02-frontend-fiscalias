import ApsForm from '@components/ApsForm';
import ApsBasicDialog from '@components/dialogs/ApsBasicDialog';
import useFormFiscalia from '../hooks/useFormFiscalia';

const FormFiscalia = () => {
  const {
    fields,
    formik,
    formikSubmit,
    open,
    isProcessing,
    handleOpen,
    toogleModalFunction,
    fiscaliaDelete,
  } = useFormFiscalia();

  return (
    <ApsBasicDialog
      toogleModalFunction={toogleModalFunction}
      deleteButtonProps={
        formik.values.id ? { onClick: fiscaliaDelete } : undefined
      }
      open={open}
      title={formik.values.id ? 'Editar fiscalía' : 'Crear fiscalía'}
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
