import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ApsBasicDialog({
  open,
  title,
  description,
  cancelProps,
  okProps,
  onClose,
  content,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ padding: '16px 24px 0px 24px' }}>
          <Typography variant="h5" children={title} color="primary" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
          {content}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" {...cancelProps}>
            {cancelProps.text}
          </Button>
          <Button variant="contained" {...okProps}>
            {okProps.text}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
