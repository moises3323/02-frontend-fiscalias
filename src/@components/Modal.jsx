import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  DialogContentText,
} from '@mui/material';

function Modal(props) {
  const {
    title = 'Título del diálogo',
    variantTitle = 'h5',
    description = 'Descripción del diálogo.',
    variantDescription = 'body1',
    content,
    titleOk = 'Aceptar',
    handleOk = () => {},
    variantOk = 'contained',
    titleCancel = 'Cancelar',
    handleCancel = () => {},
    open,
    onClose,
    loading,
    titleProps,
    contentProps,
    actionsProps,
    dialogProps,
    fullWidth,
    maxWidth,
  } = props;

  return (
    <Dialog
      id="alert-dialog"
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      {...dialogProps}
    >
      <DialogTitle id="alert-dialog-title" {...titleProps}>
        <Typography variant={variantTitle} children={title} />
      </DialogTitle>
      <DialogContent id="alert-dialog-content" {...contentProps}>
        <DialogContentText>
          <Typography variant={variantDescription} children={description} />
        </DialogContentText>
        {content}
      </DialogContent>
      <DialogActions id="alert-dialog-actions" {...actionsProps}>
        <Button onClick={handleCancel} color="secondary" autoFocus>
          {titleCancel}
        </Button>
        <Button onClick={handleOk} color="primary" variant={variantOk}>
          {titleOk}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default React.memo(Modal);
