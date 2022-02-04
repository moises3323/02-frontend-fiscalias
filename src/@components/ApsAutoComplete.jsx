import { Autocomplete, Grid, TextField } from '@mui/material';
import { Fragment } from 'react';

const ApsAutoComplete = ({
  options = [],
  gridItem = false,
  gridProps = {},
  ...props
}) => {
  const defaultProps = {
    options: [{ label: 'Sin selección', value: -1 }, ...options],
    getOptionLabel: (option) => option.label,
    isOptionEqualToValue: (option, value) => option.value === value.value,
    value: { label: 'Sin selección', value: -1 },
  };

  const Container = gridItem ? Grid : Fragment;
  const propsGrid = gridItem
    ? {
        item: true,
        md: 6,
        sm: 12,
        xs: 12,
        ...gridProps,
      }
    : {};

  const _changeValue = (e, v) =>
    props.onChange ? props.onChange(v) : undefined;

  const _formikConfig = () => {
    const { name, formik } = props;
    if (!formik || !name) return {};
    return {
      autoCompleteProps: {
        value: formik.values[name] || { label: 'Sin selección', value: -1 },
        onChange: (e, v) => formik.setFieldValue(name, v),
      },
      textFieldProps: {
        error: /* formik.touched[name] && */ Boolean(formik.errors[name]),
        helperText: /* formik.touched[name] &&  */ formik.errors[name],
      },
    };
  };

  return (
    <Container {...propsGrid}>
      <Autocomplete
        {...defaultProps}
        clearOnEscape
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            variant="filled"
            {..._formikConfig().textFieldProps} /* required */
          />
        )}
        {...props}
        onChange={_changeValue}
        {..._formikConfig().autoCompleteProps}
      />
    </Container>
  );
};

export default ApsAutoComplete;
