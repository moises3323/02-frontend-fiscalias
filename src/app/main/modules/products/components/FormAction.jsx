import React from 'react';
import ApsForm from '@components/ApsForm';
import useFormAction from '../hooks/useFormAction';

const FormAction = () => {
  const { fields, formik /* formikSubmit */ } = useFormAction();

  return <ApsForm title="Datos principales" fields={fields} formik={formik} />;
};

export default React.memo(FormAction);
