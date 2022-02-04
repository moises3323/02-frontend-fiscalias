import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ApsAutoComplete from './ApsAutoComplete';
import ApsTextField from './ApsTextField';

const ApsForm = ({ title, titleProps = {}, fields = [], formik }) => {
  return (
    <>
      {title && (
        <Typography
          variant="h5"
          children={title}
          color="primary"
          sx={{ marginBottom: '24px' }}
          {...titleProps}
        />
      )}
      <Paper sx={{ padding: '20px', borderRadius: '16px' }}>
        <Grid container spacing={3}>
          {fields.map((field) =>
            field.type === 'autocomplete' ? (
              <ApsAutoComplete formik={formik} key={field.id} {...field} />
            ) : (
              <ApsTextField formik={formik} key={field.id} {...field} />
            )
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(ApsForm);
