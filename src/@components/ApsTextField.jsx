import { Fragment } from 'react';
import { Grid, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';

const ApsTextField = ({
  gridItem = false,
  gridProps = {},
  options = [],
  ...props
}) => {
  const _changeValue = (e) =>
    props.onChange ? props.onChange(e.target.value) : undefined;

  const _formikConfig = () => {
    const { name, formik } = props;
    if (!formik || !name) return {};

    return {
      value: formik.values[name],
      onChange: formik.handleChange,
      error: /* formik.touched[name] && */ Boolean(formik.errors[name]),
      helperText: /* formik.touched[name] &&  */ formik.errors[name],
    };
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

  const _selectProps = () => {
    const opciones = [{ value: '-1', label: 'Sin selección' }, ...options];
    return options.length
      ? {
          children: opciones.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          )),
        }
      : {};
  };

  return (
    <Container {...propsGrid}>
      <TextField
        fullWidth
        variant="filled"
        {...props}
        onChange={_changeValue}
        {..._selectProps()}
        {..._formikConfig()}
      />
    </Container>
  );
};

export default ApsTextField;
