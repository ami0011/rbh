import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import makeStyles from '@material-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: '#f9f9faa1',
  },
  progress: {
    '&:focus': {
      outline: 'none',
    },
  },
});

function LoaderOverlay({ open }) {
  const classes = useStyles();
  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{ className: classes.backdrop }}
      className={classes.root}
      open={open}
    >
      <CircularProgress className={classes.progress} />
    </Modal>
  );
}

LoaderOverlay.propTypes = {
  open: PropTypes.bool,
};

LoaderOverlay.defaultProps = {
  open: false,
};

export default LoaderOverlay;
